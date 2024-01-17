import { getDB, saveDB } from "../Api";
import { listWorkflows, loadTable, updateFlow } from "./WorkspaceDB";
import { Folder } from "../types/dbTypes";
import { validateOrSaveAllJsonFileMyWorkflows } from "../utils";
import { getWorkspaceIndexDB, updateWorkspaceIndexDB } from "./IndexDBUtils";
import { v4 as uuidv4 } from "uuid";
import { TableBase } from "./TableBase";

export class FoldersTable {
  static readonly TABLE_NAME = "folders";
  private records: {
    [id: string]: Folder;
  };
  private constructor() {
    this.records = {};
  }

  static async load(): Promise<FoldersTable> {
    const instance = new FoldersTable();
    const json = await loadTable(FoldersTable.TABLE_NAME);
    if (json != null) {
      instance.records = json;
    }
    return instance;
  }
  public listAll(): Folder[] {
    return Object.values(this.records);
  }
  public getRecords() {
    return this.records;
  }
  public get(id: string): Folder | undefined {
    return this.records[id];
  }
  public create(input: { name: string; parentFolderID?: string }): Folder {
    const uniqueName = this.generateUniqueName(input.name);
    const folder: Folder = {
      id: uuidv4(),
      name: uniqueName,
      parentFolderID: input.parentFolderID ?? null,
      updateTime: Date.now(),
      createTime: Date.now(),
      type: "folder",
    };
    this.records[folder.id] = folder;
    saveDB("folders", JSON.stringify(this.records));
    updateWorkspaceIndexDB();

    return folder;
  }
  public update(
    input: {
      id: string;
    } & Partial<Folder>
  ) {
    const folder = this.records[input.id];
    if (folder == null) {
      return;
    }
    const newRecord = {
      ...folder,
      ...input,
    };
    if (input.name != null) {
      newRecord.updateTime = Date.now();
    }
    this.records[input.id] = newRecord;
    saveDB("folders", JSON.stringify(this.records));
    updateWorkspaceIndexDB();
    // move or rename all workflows to the right directory(not required when folded state changes)
    if (input.name != null || input.parentFolderID != null) {
      validateOrSaveAllJsonFileMyWorkflows(true);
    }
  }
  public delete(id: string) {
    delete this.records[id];
    const childrenFlows = listWorkflows().filter(
      (flow) => flow.parentFolderID == id
    );
    childrenFlows.forEach((flow) =>
      updateFlow(flow.id, { parentFolderID: undefined })
    );
    saveDB("folders", JSON.stringify(this.records));
    updateWorkspaceIndexDB();
    validateOrSaveAllJsonFileMyWorkflows();
  }
  public generateUniqueName(name?: string) {
    let newFlowName = name ?? "New folder";
    const folderNameList = this.listAll()?.map((f) => f.name);
    if (folderNameList.includes(newFlowName)) {
      let num = 2;
      let flag = true;
      while (flag) {
        if (folderNameList.includes(`${newFlowName} ${num}`)) {
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
