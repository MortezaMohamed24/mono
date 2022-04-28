import {State} from "../types";
import {PopupJoinAction} from "../actions";


function join(popups: State, entry: PopupJoinAction["payload"]) {
  popups.history.push({
    id: entry.id,
    zIndex: entry.zIndex,
    isOpen: true,
    payload: entry.payload,
    reference: entry.reference,
    backwardable: popups.history.length > 0,
  });
}


export default join;