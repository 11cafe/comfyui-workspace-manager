// db.ts
import Dexie, { Table } from "dexie";
import { Workflow } from "../WorkspaceDB";

export class WorkflowDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  friends!: Table<Workflow>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      friends: "++id, name, age", // Primary key and indexed props
    });
  }
}

export const db = new WorkflowDexie();
