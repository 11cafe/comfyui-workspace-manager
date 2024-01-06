import { getDB, saveDB } from "../Api";
import { v4 as uuidv4 } from "uuid";
import { getWorkspaceIndexDB, updateWorkspaceIndexDB } from "./IndexDBUtils";
import { generateUniqueName, sortFlows } from "../utils";
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
  public async list(sortBy?: ESortTypes): Promise<Workflow[]> {
    const records = await this.getRecords();
    const workflows = Object.values(records);
    return sortBy
      ? sortFlows(workflows, sortBy)
      : workflows.sort((a, b) => b.updateTime - a.updateTime);
  }

  public async create({
    json,
    name,
    parentFolderID,
    tags,
  }: Partial<Workflow>): Promise<Workflow | null> {
    const newFlowName = await generateUniqueName(name);
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
    saveDB("media", JSON.stringify(records));
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
      const newFlowName = generateUniqueName(flow.name);
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
}
