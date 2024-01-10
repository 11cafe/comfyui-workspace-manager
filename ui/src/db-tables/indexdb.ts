// db.ts
import Dexie, { Table } from "dexie";
import { Workflow } from "./WorkspaceDB";
import { Changelog, Media } from "../types/dbTypes";

class WorkspaceDB extends Dexie {
  workflows!: Table<Workflow, string>;
  changelogs!: Table<Changelog, string>;
  media!: Table<Media, string>;

  constructor() {
    super("WorkspaceDB");
    this.version(1)
      .stores({
        workflows: "++id, name", // Primary key and indexed props
        changelogs: "++id, workflowID",
        media: "++id, workflowID",
      })
      .upgrade((trans) => {
        // Here you can write logic to initialize or migrate data to the new 'media' table, if necessary
      });
  }
}

export const indexdb = new WorkspaceDB();
