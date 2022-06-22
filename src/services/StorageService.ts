
export class StorageService {
  // @ts-ignore
  static indexedDB = window.indexedDB || window['mozIndexedDB'] || window['webkitIndexedDB'] || window.msIndexedDB;
  // @ts-ignore
  static IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"};
  // @ts-ignore
  static IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
  static db: any;

  static checkAvailability() {
    if (!this.indexedDB) throw new Error("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
  }

  static initialize() {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open("kahoot", 3);
      request.onerror = (ev) => reject(request?.error?.code);
      request.onsuccess = (ev: any) => {
        this.db = ev.result;
      }
    });
  }
}
