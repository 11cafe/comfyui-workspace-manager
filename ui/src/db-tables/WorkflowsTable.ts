import { getDB, saveDB } from "../Api";
import { v4 as uuidv4 } from "uuid";
import { getWorkspaceIndexDB, updateWorkspaceIndexDB } from "./IndexDBUtils";
import { sortFlows } from "../utils";
import { ESortTypes, ImportWorkflow } from "../RecentFilesDrawer/types";
import {
  deleteJsonFileMyWorkflows,
  saveJsonFileMyWorkflows,
} from "./DiskFileUtils";
import { defaultGraph } from "../defaultGraph";
import { Workflow } from "../types/workspaceTypes";
import { TableBase } from "./TableBase";

export class WorkflowsTable extends TableBase<Workflow> {
  constructor() {
    super("workflows");
  }
  public async listAll(sortBy?: ESortTypes): Promise<Workflow[]> {
    const records = await this.getRecords();
    const workflows = Object.values(records);
    return sortBy
      ? sortFlows(workflows, sortBy)
      : workflows.sort((a, b) => b.updateTime - a.updateTime);
  }
  public async updateFlow(id: string, input: Partial<Workflow>) {
    const workflow = await this.get(id);
    const before = workflow;
    if (before == null) {
      return;
    }
    const after = {
      ...before,
      ...input,
    };
    const beforeStr = JSON.stringify(before);
    const afterStr = JSON.stringify(after);
    if (beforeStr === afterStr) {
      // no change detected
      return;
    }
    const newWf = {
      ...after,
      updateTime: Date.now(),
    };
    const records = await this.getRecords();
    records[id] = newWf;
    updateWorkspaceIndexDB();
    saveDB("workflows", JSON.stringify(records));
    // save to my_workflows/
    if (input.name != null || input.parentFolderID != null) {
      // renamed file or moved file folder
      deleteJsonFileMyWorkflows(before);
      saveJsonFileMyWorkflows(after);
    } else if (input.json != null) {
      saveJsonFileMyWorkflows(after);
    }
  }
  public async create({
    json,
    name,
    parentFolderID,
    tags,
  }: Partial<Workflow>): Promise<Workflow | null> {
    const newFlowName = await this.generateUniqueName(name);
    const uuid = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const time = Date.now();
    const workspace = await this.getRecords();
    const wfJson = json ?? JSON.stringify(defaultGraph);
    const newWf: Workflow = {
      id: uuid,
      name: newFlowName,
      json: wfJson,
      parentFolderID: parentFolderID,
      updateTime: time,
      createTime: time,
      tags: tags ?? [],
    };
    workspace[uuid] = newWf;
    updateWorkspaceIndexDB();
    saveDB("workflows", JSON.stringify(workspace));
    saveJsonFileMyWorkflows(newWf, (fullPath) => {
      newWf.filePath = fullPath ?? undefined;
      updateWorkspaceIndexDB();
      saveDB("workflows", JSON.stringify(workspace));
    });
    return workspace[uuid];
  }

  public async delete(id: string) {
    const records = await this.getRecords();
    const workflow = records[id];
    if (workflow) {
      deleteJsonFileMyWorkflows({ ...workflow });
    }
    delete records[id];
    saveDB(this.tableName, JSON.stringify(records));
    updateWorkspaceIndexDB();
  }

  public async batchCreateFlows(
    flowList: ImportWorkflow[]
  ): Promise<string | undefined> {
    const workspace = await this.getRecords();

    flowList.forEach(async (flow) => {
      if (workspace == null) {
        return;
      }
      const newFlowName = await this.generateUniqueName(flow.name);
      const uuid = uuidv4();
      const time = Date.now();
      workspace[uuid] = {
        id: uuid,
        name: newFlowName,
        json: flow.json,
        updateTime: time,
        createTime: time,
        tags: [],
      };
      deleteJsonFileMyWorkflows(workspace[uuid]);
    });

    const stringifyWorkspace = JSON.stringify(workspace);
    updateWorkspaceIndexDB();
    return await saveDB("workflows", stringifyWorkspace);
  }

  public async batchDeleteFlow(ids: string[]) {
    const workspace = await this.getRecords();
    ids.forEach((id) => {
      if (workspace == null) {
        return;
      }
      const workflow = workspace[id];
      if (workflow) {
        deleteJsonFileMyWorkflows({ ...workflow });
      }
      workspace && delete workspace[id];
    });

    const stringifyWorkspace = JSON.stringify(workspace);
    updateWorkspaceIndexDB();
    saveDB("workflows", stringifyWorkspace);
  }
  public async generateUniqueName(name?: string) {
    /**
     * Generate a unique name
     * For imported scenes, the default name is the file name.
     * For new scenes, the default name is Untitled Flow.
     * Get the full workflow list. If the default name already exists, search incrementally starting from 2.
     * Looks for a unique name in the format `${default name} ${number}`.
     */
    let newFlowName = name ?? "Untitled Flow";
    const records = await this.listAll();
    const flowNameList = records.map((flow) => flow.name);
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
}
