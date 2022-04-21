import {HistoryEntry} from "./types";


const HISTORY: HistoryEntry[] = [];


function get({id}: {id: HistoryEntry["id"]}) {
  return HISTORY.find(entry => entry.id === id);
}

function pop() {
  return HISTORY.pop();
}

function last(): HistoryEntry | undefined {
  return HISTORY[length() - 1];
}

function push(entry: HistoryEntry) {
  HISTORY.push();
  return entry;
}

function clear(index: number = 0) {
  return HISTORY.splice(index, Infinity);
}

function length() {
  return HISTORY.length;
}

function indexOf({id}: {id: HistoryEntry["id"]}) {
  return HISTORY.findIndex(entry => entry.id === id);
}


export {get, pop, last, push, clear, length, indexOf};
export default Object.freeze({get, pop, last, push, clear, length, indexOf});