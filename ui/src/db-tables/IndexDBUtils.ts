// Legacy indexdb backup, to be deleted after indexdb migration is done

const WORKSPACE_KEY = "backup";
const WORKSPACE_TABLE = "workspace";
let indexDB: IDBDatabase | null = null;
// Function to open a database
function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("WorkspaceDB", 3);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      // Create an object store if it doesn't exist
      if (!db.objectStoreNames.contains(WORKSPACE_TABLE)) {
        db.createObjectStore(WORKSPACE_TABLE, { keyPath: "id" });
      }
    };

    request.onsuccess = (event) => {
      resolve((event.target as IDBOpenDBRequest).result);
    };

    request.onerror = (event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });
}

// Function to write data to the database
async function writeWorkspaceTable(data: string): Promise<void> {
  try {
    if (indexDB == null) indexDB = await openDatabase();

    return new Promise((resolve, reject) => {
      if (indexDB == null) return reject("indexDB is null");
      const transaction = indexDB.transaction([WORKSPACE_TABLE], "readwrite");
      const store = transaction.objectStore(WORKSPACE_TABLE);
      const request = store.put({ id: WORKSPACE_KEY, value: data });

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error("Error while opening database:", error);
  }
}

// Function to read data from the database
async function readDataFromDatabase(): Promise<string | undefined> {
  try {
    if (indexDB == null) indexDB = await openDatabase();

    return new Promise((resolve, reject) => {
      if (indexDB == null) return reject("indexDB is null");

      const transaction = indexDB.transaction([WORKSPACE_TABLE], "readonly");
      const store = transaction.objectStore(WORKSPACE_TABLE);
      const request = store.get(WORKSPACE_KEY);

      request.onsuccess = () => {
        if (request.result) {
          resolve(request.result.value);
        } else {
          resolve(undefined); // Key not found
        }
      };
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error("Error while reading from database:", error);
  }
}

export async function getWorkspaceIndexDB() {
  try {
    const comfyspaceData = await readDataFromDatabase();

    return comfyspaceData;
  } catch (error) {
    console.error("Error retrieving data from IndexedDB:", error);
  }
}
