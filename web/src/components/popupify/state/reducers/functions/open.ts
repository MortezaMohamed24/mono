import {State} from "../../types";
import {PopupOpenAction} from "../../actions";


function open({history}: State, entry: PopupOpenAction["payload"]) {
  history.clear();

  history.push({
    id: entry.id,
    isOpen: true,
    zIndex: entry.zIndex,
    payload: entry.payload,
    reference: entry.reference,
    backwardable: false,
  });
}


export default open;