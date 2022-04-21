import {State} from "/store";
import addOneLabel from "./addOne";
import {LabelCreateRequestMeta} from "/labels/actions";


function createLabel(state: State, payload: LabelCreateRequestMeta) {
  addOneLabel(state, payload);
}


export default createLabel;