import {State} from "/store";
import addOneList from "./addOne";
import {ListRawUnnested} from "/lists/entity";


function addManyLists(state: State, lists: ListRawUnnested[]) {
  for (let entity of lists) {
    addOneList(state, entity);
  }
}


export default addManyLists;