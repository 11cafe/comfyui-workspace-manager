import { foldersTable } from "./WorkspaceDB";
import { Workflow } from "../types/dbTypes";
import { generateUniqueName, sortFileItem } from "../utils";
import { v4 as uuidv4 } from "uuid";
import { TableBase } from "./TableBase";
import { indexdb } from "./indexdb";
import {
  deleteJsonFileMyWorkflows,
  saveJsonFileMyWorkflows,
} from "./DiskFileUtils";
import { ESortTypes, ImportWorkflow } from "../RecentFilesDrawer/types";
import { defaultGraph } from "../defaultGraph";

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

  public async createFlow(input: Partial<Workflow>): Promise<Workflow> {
    const { id, json, name } = input;
    const newFlowName = await generateUniqueName(name);
    const uuid = id ?? uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const time = Date.now();
    const newWorkflow: Workflow = {
      ...input,
      id: uuid,
      json: json ?? JSON.stringify(defaultGraph),
      name: newFlowName,
      updateTime: time,
      createTime: time,
    };
    //add to IndexDB
    await indexdb.workflows.add(newWorkflow);
    // add to disk file db
    this.saveDiskDB();
    // add to my_workflows/
    saveJsonFileMyWorkflows(newWorkflow);
    return newWorkflow;
  }

  public async updateFlow(id: string, input: Partial<Workflow>) {
    const before = await this.get(id);
    if (before == null) {
      return;
    }
    const after = {
      ...before,
      ...input,
      id,
    };
    const beforeStr = JSON.stringify(before);
    const afterStr = JSON.stringify(after);
    if (beforeStr === afterStr) {
      // no change detected
      return;
    }
    const newWorkflow: Workflow = after;
    // When modifying the associated tag or modifying the directory, updateTime is not modified.
    const updateKey = Object.keys(input);
    const isModifyingTagOrFolder =
      updateKey.length === 1 &&
      ["tags", "parentFolderID"].includes(updateKey[0]);
    if (!isModifyingTagOrFolder) {
      newWorkflow.updateTime = Date.now();
      // update parent folder updateTime
      if (newWorkflow.parentFolderID != null) {
        await foldersTable?.update({
          id: newWorkflow.parentFolderID,
          updateTime: Date.now(),
        });
      }
    }
    //update indexdb
    await indexdb.workflows.update(id, newWorkflow);
    //update curWorkflow RAM
    if (this._curWorkflow && this._curWorkflow.id === id) {
      this._curWorkflow = newWorkflow;
    }
    await this.saveDiskDB();
    // save to my_workflows/
    if (input.name != null || input.parentFolderID != null) {
      // renamed file or moved file folder
      await deleteJsonFileMyWorkflows(before);
      await saveJsonFileMyWorkflows(after);
      return;
    }
    if (input.json != null) {
      await saveJsonFileMyWorkflows(after);
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
          : await generateUniqueName(flow.name);
      const uuid = uuidv4();
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
      await saveJsonFileMyWorkflows(newWorkflow);
    }
    await indexdb.workflows.bulkAdd(newWorkflows);
    this.saveDiskDB();
  }

  public async deleteFlow(id: string) {
    const workflow = await this.get(id);
    if (workflow) {
      deleteJsonFileMyWorkflows({ ...workflow });
    }
    //add to IndexDB
    await indexdb.workflows.delete(id);
    this.saveDiskDB();
  }

  public async batchDeleteFlow(ids: string[]) {
    const workflowList = (await indexdb.workflows.bulkGet(ids)) as Workflow[];
    for (const flow of workflowList) {
      flow && (await deleteJsonFileMyWorkflows(flow));
    }
    await indexdb.workflows.bulkDelete(ids);
    this.saveDiskDB();
  }

  public async listFolderContent(
    folderID?: string, // undefined if root folder
    sortBy?: ESortTypes,
  ) {
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
}
