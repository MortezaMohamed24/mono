import {State} from "/store";
import addOneList from "./addOne";
import {ListRawUnnested} from "/features/lists/entity";


function addManyLists(state: State, lists: ListRawUnnested[]) {
  for (let entity of lists) {
    addOneList(state, entity);
  }
}


export default addManyLists;