import {State} from "/store";
import destroyOneLabel from "./destroyOne";


function destroyManyLabels(state: State, {idLabels}: {idLabels: string[]}) {
  for (let idLabel of idLabels) {
    destroyOneLabel(state, {idLabel});
  }
}


export default destroyManyLabels;