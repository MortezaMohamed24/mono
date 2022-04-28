import {ID} from "./types";
import {Entry} from "./types";
import {immerable} from "immer";


export class History {
  _entries: Entry[] = [];


  get last() {
    return this._entries[this.length - 1];
  }

  get length() {
    return this._entries.length;
  }

  get [immerable]() {
    return true;
  }
  

  pop() {
    return this._entries.pop();
  }
  
  find(id: ID) {
    const entries = this._entries;

    for (let i = this.length - 1; i >= 0; i--) {
      if (entries[i].id === id) {
        return entries[i];
      }
    }

    return null;
  }

  push(entry: Entry) {
    return this._entries.push(entry);
  }
  
  clear(from: number = 0) {
    this._entries.splice(from, Infinity);
  }

  close() {
    for (let entry of this._entries) {
      entry.isOpen = false;
    }
  }
  
  indexOf(id: ID) {
    const entries = this._entries;

    for (let i = this.length - 1; i >= 0; i--) {
      if (entries[i].id === id) {
        return i;
      }
    }

    return -1;
  }
}
  

export default History;