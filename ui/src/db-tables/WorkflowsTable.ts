import {
  changelogsTable,
  foldersTable,
  userSettingsTable,
} from "./WorkspaceDB";
import { Folder, Workflow } from "../types/dbTypes";
import { sortFileItem } from "../utils";
import { nanoid } from "nanoid";
import { TableBase } from "./TableBase";
import { indexdb } from "./indexdb";
import {
  deleteJsonFileMyWorkflows,
  saveJsonFileMyWorkflows,
} from "./DiskFileUtils";
import { ESortTypes, ImportWorkflow } from "../RecentFilesDrawer/types";
import { defaultGraph } from "../defaultGraph";
import { scanMyWorkflowsDir } from "../utils/twowaySyncUtils";
import { TwowaySyncAPI } from "../apis/TwowaySyncApi";
import { COMFYSPACE_TRACKING_FIELD_NAME } from "../const";

export class WorkflowsTable extends TableBase<Workflow> {
  static readonly TABLE_NAME = "workflows";
  private _curWorkflow: Workflow | null = null;
  public get curWorkflow() {
    return this._curWorkflow;
  }

  constructor() {
    super("workflows");
  }

  static async load(): Promise<WorkflowsTable> {
    const instance = new WorkflowsTable();
    return instance;
  }
  public updateCurWorkflowID(id: string | null) {
    if (id == null) {
      this._curWorkflow = null;
      return;
    }
    this.get(id).then((w) => {
      this._curWorkflow = w ?? null;
    });
  }
  public updateCurWorkflow(workflow: Workflow | null) {
    this._curWorkflow = workflow;
  }

  /**
   * Check whether the currently opened workflow is the latest version and is consistent with the DB.
   * Through updateTime comparison, if it is inconsistent, it means that a newer version already exists in the DB.
   * If the automatic save function is turned on at this time, the latest version in the DB will be overwritten.
   * Therefore, the user needs to confirm whether to continue to enable automatic saving.
   * @returns boolean
   */
  public async latestVersionCheck() {
    if (this._curWorkflow) {
      const curFlowInDB = await indexdb.workflows.get(this._curWorkflow.id);
      if (curFlowInDB) {
        return curFlowInDB?.updateTime === this._curWorkflow.updateTime;
      }
      return true;
    }
    return true;
  }

  public async listByIndex(
    index: keyof Workflow,
    value: string,
  ): Promise<Workflow[]> {
    const list = await super.listByIndex(index, value);
    const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");
    if (!twoWaySyncEnabled) {
      return list;
    }
    // for two way sync we need to varify if it really exists in disk
    const results = await Promise.all(
      list.map(async (f) => await this.get(f.id)),
    );
    return results.filter((f) => f != null) as Workflow[];
  }

  async generateUniqueName(name?: string, parentFolderID?: string) {
    const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");
    if (twoWaySyncEnabled) {
      const fileName = await TwowaySyncAPI.genFileUniqueName(
        (name ?? "Untitled Flow") + ".json",
        parentFolderID ?? "",
      );
      return fileName?.replace(/\.json$/, "") ?? "Untitled Flow";
    }
    /**
     * Generate a unique name
     * For imported scenes, the default name is the file name.
     * For new scenes, the default name is Untitled Flow.
     * Get the full workflow list. If the default name already exists, search incrementally starting from 2.
     * Looks for a unique name in the format `${default name} ${number}`.
     */
    let newFlowName = name ?? "Untitled Flow";
    const flowList = (await this.listAll()) ?? [];
    const flowNameList = flowList
      .filter((f) => f.parentFolderID == parentFolderID)
      .map((flow) => flow.name);
    if (flowNameList.includes(newFlowName)) {
      let num = 2;
      let flag = true;
      while (flag) {
        if (flowNameList.includes(`${newFlowName} ${num}`)) {
          num++;
        } else {
          newFlowName = `${newFlowName} ${num}`;
          flag = false;
        }
      }
    }
    return newFlowName;
  }

  public async createFlow(
    input: Partial<Workflow>,
  ): Promise<Workflow | undefined> {
    const { name } = input;
    const newFlowName = await this.generateUniqueName(
      name,
      input.parentFolderID ?? undefined,
    );
    const time = Date.now();
    const newWorkflow: Workflow = {
      ...input,
      id: input.id ?? nanoid(),
      json: input.json ?? JSON.stringify(defaultGraph),
      name: newFlowName,
      updateTime: input.updateTime ?? time,
      createTime: input.createTime ?? time,
    };
    //add to IndexDB
    await indexdb.workflows.add(newWorkflow);
    // add to disk file db
    this.saveDiskDB();
    // add to my_workflows/
    const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");
    if (twoWaySyncEnabled) {
      await TwowaySyncAPI.createWorkflow(newWorkflow);
      return await this.get(newWorkflow.id);
    } else {
      saveJsonFileMyWorkflows(newWorkflow);
    }
    return newWorkflow;
  }

  // disallow TableBase.update()
  async update(
    _id: string,
    _change: Partial<Workflow>,
  ): Promise<Workflow | null> {
    throw new Error("Method not allowed.");
  }

  public async updateMetaInfo(
    id: string,
    change: Omit<Partial<Workflow>, "id" | "name" | "parentFolderID" | "json">,
  ): Promise<Workflow | null> {
    return this._update(id, change);
  }
  private async _update(
    id: string,
    change: Partial<Workflow>,
  ): Promise<Workflow | null> {
    //update indexdb
    await indexdb.workflows.update(id, change);
    const newWorkflow = (await indexdb.workflows.get(id)) ?? null;
    //update curWorkflow RAM
    if (this._curWorkflow && this._curWorkflow.id === id) {
      this._curWorkflow = newWorkflow;
    }
    this.saveDiskDB();
    return newWorkflow;
  }

  async updateFolder(id: string, change: Pick<Workflow, "parentFolderID">) {
    const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");
    const oldWorkflow = await this.get(id);
    const newWorkflow = await this.updateMetaInfo(id, change as any);
    if (!newWorkflow || !oldWorkflow) {
      return;
    }
    if (twoWaySyncEnabled) {
      await TwowaySyncAPI.moveWorkflow(oldWorkflow, change.parentFolderID!);
    } else {
      await saveJsonFileMyWorkflows(newWorkflow);
      await deleteJsonFileMyWorkflows(oldWorkflow);
      // update parent folder updateTime
      if (newWorkflow?.parentFolderID != null) {
        await indexdb.folders?.update(newWorkflow.parentFolderID, {
          updateTime: Date.now(),
        });
      }
    }
  }
  public async genLastManualSavedJson(id: string) {
    const changelog = await changelogsTable?.getLastestByWorkflowID(id);
    return changelog?.json;
  }
  public async updateName(id: string, change: Pick<Workflow, "name">) {
    const before = await this.get(id);
    const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");
    if (twoWaySyncEnabled) {
      before &&
        (await TwowaySyncAPI.renameWorkflow(before, change.name + ".json"));
    }
    return await this.updateMetaInfo(id, change as any);
  }
  public async updateFlow(id: string, input: Pick<Workflow, "json">) {
    const before = await this.get(id, false);
    if (before == null) {
      return;
    }
    const beforeStr = JSON.stringify(before.json);
    const afterStr = JSON.stringify(input.json);
    if (beforeStr === afterStr) {
      // no change detected
      return;
    }
    const after = await this._update(id, {
      updateTime: Date.now(),
      json: input.json,
    });
    // save to my_workflows/
    const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");
    if (twoWaySyncEnabled) {
      after && (await TwowaySyncAPI.saveWorkflow(after));
    } else {
      after && (await saveJsonFileMyWorkflows(after));
    }
  }

  /**
   * Add flows in batches
   * @param flowList Need to add a new flow list
   * @param isOverwriteExistingFile By automatically scanning the newly added flow on the local disk,
   *  when synchronizing the DB, the flow on the local disk needs to be rewritten
   * because extra.comfyspace_tracking.id needs to be appended to json.
   * @param parentFolderID If you are adding batches to the specified files, provide the folder id.
   * @returns
   */
  public async batchCreateFlows(
    flowList: ImportWorkflow[] = [],
    isOverwriteExistingFile: boolean = false,
    parentFolderID?: string,
  ) {
    const newWorkflows: Workflow[] = [];
    for (const flow of flowList) {
      const newFlowName =
        flow.name && isOverwriteExistingFile
          ? flow.name
          : await this.generateUniqueName(flow.name, parentFolderID);
      const uuid = nanoid();
      const time = Date.now();
      const newWorkflow: Workflow = {
        id: uuid,
        name: newFlowName,
        json: flow.json,
        parentFolderID: parentFolderID,
        updateTime: time,
        createTime: time,
        tags: [],
      };
      newWorkflows.push(newWorkflow);
      const twoWaySyncEnabled =
        await userSettingsTable?.getSetting("twoWaySync");
      if (twoWaySyncEnabled) {
        try {
          const jsonObj = JSON.parse(flow.json);
          const existingWorkflowID =
            jsonObj?.extra?.[COMFYSPACE_TRACKING_FIELD_NAME]?.id;
          if (existingWorkflowID) {
            const existingWorkflow = await this.get(existingWorkflowID);
            if (!existingWorkflow) {
              newWorkflow.id = existingWorkflowID;
            }
          }
          TwowaySyncAPI.createWorkflow(newWorkflow);
        } catch (e) {
          console.error("batchCreateFlows error", e);
        }
      } else {
        await saveJsonFileMyWorkflows(newWorkflow);
      }
    }
    try {
      await indexdb.workflows.bulkAdd(newWorkflows);
      this.saveDiskDB();
    } catch (e) {
      console.error("batchCreateFlows error", e);
    }
  }

  public async deleteFlow(id: string) {
    const workflow = await this.get(id);

    if (workflow) {
      const twoWaySyncEnabled =
        await userSettingsTable?.getSetting("twoWaySync");
      if (twoWaySyncEnabled) {
        await TwowaySyncAPI.deleteWorkflow(workflow);
      } else {
        deleteJsonFileMyWorkflows({ ...workflow });
      }
    }
    //add to IndexDB
    await indexdb.workflows.delete(id);
    this.saveDiskDB();
  }

  public async batchDeleteFlow(ids: string[]) {
    const workflowList = (await indexdb.workflows.bulkGet(ids)) as Workflow[];
    for (const flow of workflowList) {
      if (!flow) return;
      const twoWaySyncEnabled =
        await userSettingsTable?.getSetting("twoWaySync");
      if (twoWaySyncEnabled) {
        await TwowaySyncAPI.deleteWorkflow(flow);
      } else {
        deleteJsonFileMyWorkflows({ ...flow });
      }
    }
    await indexdb.workflows.bulkDelete(ids);
    this.saveDiskDB();
  }

  public async listFolderContent(
    folderID?: string, // undefined if root folder
    sortBy?: ESortTypes,
  ): Promise<(Workflow | Folder)[]> {
    const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");
    if (twoWaySyncEnabled) {
      return await scanMyWorkflowsDir(folderID ?? null);
    }
    const workflows =
      (await this.listAll().then((list) =>
        list.filter((w) => w.parentFolderID == folderID),
      )) ?? [];
    const folders =
      (await foldersTable
        ?.listAll()
        .then((list) => list.filter((f) => f.parentFolderID == folderID))) ??
      [];

    const all = [...workflows, ...folders];

    return sortFileItem(all, sortBy ?? ESortTypes.RECENTLY_MODIFIED);
  }

  public async get(
    id: string,
    fetchJsonContentOnDisk = true, //if false, only get the meta info from indexdb
  ): Promise<Workflow | undefined> {
    const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");
    const wf = await indexdb.workflows.get(id);
    if (!twoWaySyncEnabled || !fetchJsonContentOnDisk) {
      return wf;
    }
    // two way sync mode
    if (wf == null) {
      return undefined;
    }
    const data = await TwowaySyncAPI.getFile({
      parentFolderID: wf.parentFolderID ?? null,
      name: wf.name,
      id: wf.id,
    });

    if (!data.json) {
      return undefined;
    }
    return {
      ...wf,
      json: JSON.stringify(data.json),
    };
  }
}
