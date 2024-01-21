import { saveDB } from "../Api";
import { listWorkflows, updateFlow } from "./WorkspaceDB";
import { Folder } from "../types/dbTypes";
import { validateOrSaveAllJsonFileMyWorkflows } from "../utils";
import { v4 as uuidv4 } from "uuid";
import { TableBase } from "./TableBase";
import { indexdb } from "./indexdb";

export class FoldersTable extends TableBase<Folder> {
  static readonly TABLE_NAME = "folders";

  constructor() {
    super("folders");
  }

  static async load(): Promise<FoldersTable> {
    const instance = new FoldersTable();
    return instance;
  }

  public async create(input: {
    name: string;
    parentFolderID?: string;
  }): Promise<Folder> {
    const uniqueName = await this.generateUniqueName(input.name);
    const folder: Folder = {
      id: uuidv4(),
      name: uniqueName,
      parentFolderID: input.parentFolderID ?? null,
      updateTime: Date.now(),
      createTime: Date.now(),
      type: "folder",
    };
    await indexdb.folders.add(folder);
    await this.listAll().then((all) => {
      saveDB("folders", JSON.stringify(all));
    });
    return folder;
  }

  public async update(
    input: {
      id: string;
    } & Partial<Folder>,
  ) {
    const folder = await this.get(input.id);
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
    await indexdb.folders.update(input.id, input);
    await saveDB("folders", JSON.stringify(await this.listAll()));
    // folder moved or renamed - move all workflows to the right directory(not required when folded state changes)
    if (input.name != null || input.parentFolderID != null) {
      validateOrSaveAllJsonFileMyWorkflows(true);
    }
  }
  public async deleteFolder(id: string) {
    /**
     * When deleting a folder,
     * breadth traverses all nested folders and deletes them from the DB one by one.
     * And modify the related flow synchronously, setting parentFolderId to undefined
     */
    const allFlows = await listWorkflows();
    const allFolders = await this.listAll();
    const nestedFolderIdStack = [id];

    while (nestedFolderIdStack.length > 0) {
      const curFolderId = nestedFolderIdStack.shift();

      if (curFolderId) {
        for (const flow of allFlows) {
          if (flow.parentFolderID === curFolderId) {
            await updateFlow(flow.id, { parentFolderID: undefined });
          }
        }

        await indexdb.folders.delete(curFolderId);

        const curNestedFolderIds = allFolders
          .filter((f) => f.parentFolderID === curFolderId)
          .map((f) => f.id);

        if (curNestedFolderIds.length) {
          nestedFolderIdStack.push(...curNestedFolderIds);
        }
      }
    }

    await saveDB("folders", JSON.stringify(await this.listAll()));

    // TODO 在嵌套文件夹场景下，重建逻辑无法有效判断子文件夹是否为空，导致子文件夹为空时无法准确删除。
    await validateOrSaveAllJsonFileMyWorkflows(true);
  }

  public async generateUniqueName(name?: string) {
    let newFlowName = name ?? "New folder";
    const folderNameList = await this.listAll().then((list) =>
      list.map((f) => f.name),
    );
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
