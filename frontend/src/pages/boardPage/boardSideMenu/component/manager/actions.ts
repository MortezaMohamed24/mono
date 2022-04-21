import TABS from "./tabs";
import HISTORY from "./history";
import {dispatch} from "./eventwork";
import {HistoryEntry} from "./types";


export function open({id}: {id?: HistoryEntry["id"] | undefined}) {
  const tab = id ? TABS.get({id}) : TABS.getDefault();
  
  if (!tab) {
    return;
  }
  
  const entry = Object.freeze(HISTORY.push({
    id: tab.id,
    Component: tab.Component, 
    backwardable: HISTORY.length() > 0,
  }));

  dispatch("OPEN", entry);
}

export function shut({id}: {id?: HistoryEntry["id"] | undefined}) {
  const index = id ? HISTORY.indexOf({id}) : 0;

  if (index === -1) {
    return;
  }

  HISTORY.clear(index);

  const last = HISTORY.last();

  if (last) {
    dispatch("OPEN", last);
  } else if (HISTORY.length() === 0) {
    dispatch("SHUT");
  }
}

export function toggle({id}: {id?: HistoryEntry["id"] | undefined}) {
  if (HISTORY.length() === 0) {
    open({id});
  } else {
    shut({id});
  }
}

export function backward() {
  if (HISTORY.length() > 1) {
    HISTORY.pop();
    dispatch("OPEN", HISTORY.last() as HistoryEntry);
  }
}


export default Object.freeze({open, shut, toggle, backward});