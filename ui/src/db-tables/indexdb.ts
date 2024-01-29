// db.ts
import Dexie, { Table } from "dexie";
import {
  Workflow,
  LocalCache,
  Changelog,
  Folder,
  Media,
  Model,
  Tag,
  UserSettings,
  WORKSPACE_INDEXDB_NAME,
} from "../types/dbTypes";

class ManagerDB extends Dexie {
  workflows!: Table<Workflow, string>;
  changelogs!: Table<Changelog, string>;
  media!: Table<Media, string>;
  folders!: Table<Folder, string>;
  tags!: Table<Tag, string>;
  userSettings!: Table<UserSettings, string>;
  models!: Table<Model, string>;
  cache!: Table<LocalCache, string>;

  constructor() {
    super(WORKSPACE_INDEXDB_NAME);
    this.version(1)
      .stores({
        workflows: "&id, name, parentFolderID", // Primary key and indexed props
        changelogs: "&id, workflowID",
        media: "&id, workflowID",
        folders: "&id, name, parentFolderID",
        tags: "&name",
        userSettings: "&id",
        models: "&id, fileName, fileHash",
        cache: "&id",
      })
      .upgrade(trans => {
        // Here you can write logic to initialize or migrate data to the new 'media' table, if necessary
      });
  }
}

export const indexdb = new ManagerDB();
