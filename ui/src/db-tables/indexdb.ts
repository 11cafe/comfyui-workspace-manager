// db.ts
import Dexie, { Table } from "dexie";
import { Workflow } from "../WorkspaceDB";

export class WorkspaceDB extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  workflows!: Table<Workflow, string>;

  constructor() {
    super("WorkspaceDB");
    this.version(1).stores({
      workflows: "++id, name", // Primary key and indexed props
    });
  }
}

export const indexdb = new WorkspaceDB();
