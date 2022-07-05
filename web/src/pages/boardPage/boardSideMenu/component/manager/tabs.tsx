import {Tab} from "./types";


const ALL: Tab[] = [];
let DEFAULT: Tab | null = null;


function has({id}: {id: Tab["id"]}) {
  return !!get({id});
}

function get({id}: {id: Tab["id"]}) {
  return ALL.find(tab => tab.id === id);
}

function push(tab: Tab) {
  if (!has(tab)) {
    ALL.push(tab);
  }
}

function getDefault() {
  return DEFAULT;
}

function defaultize(tab: Tab) {
  push(tab);
  DEFAULT = tab;
}


export {has, get, push, getDefault, defaultize};
export default Object.freeze({has, get, push, getDefault, defaultize});