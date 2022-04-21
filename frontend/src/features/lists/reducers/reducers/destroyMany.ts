import {State} from "/store";
import destroyOneList from "./destroyOne";


function destroyManyLists(state: State, {idLists}: {idLists: string[]}) {
  for (let idList of idLists) {
    destroyOneList(state, {idList});
  }
}


export default destroyManyLists;