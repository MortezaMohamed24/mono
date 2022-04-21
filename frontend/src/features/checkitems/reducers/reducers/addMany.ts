import {State} from "../../../../store";
import addOneCheckitem from "./addOne";
import {CheckitemRawUnnested} from "../../entity";


function addManyCheckitems(state: State, checkitems: CheckitemRawUnnested[]) {
  if (state.ur.$status === "succeeded") {
    for (let entity of checkitems) {
      addOneCheckitem(state, entity);
    }
  }
}


export default addManyCheckitems;