import {State} from "../../types";
import {PopupForwardAction} from "../../actions";


function forward({history}: State, payload: PopupForwardAction["payload"]) {
  history.close();

  history.push({
    id: payload.id,
    isOpen: true,
    zIndex: payload.zIndex, 
    payload: payload.payload, 
    reference: payload.reference, 
    backwardable: history.length > 0, 
  });
}


export default forward;