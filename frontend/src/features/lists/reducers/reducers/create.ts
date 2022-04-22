import {State} from "/store";
import addOneList from "./addOne";
import {ListCreateRequestMeta} from "/features/lists/actions";
import {DATE_CREATED_ASCENDING} from "/features/lists/fields";


function createList(state: State, meta: ListCreateRequestMeta) {
  addOneList(state, {
    id: meta.id,
    title: meta.title,
    cards: [],
    idBoard: meta.idBoard,
    isWatched: false,
    sortMethod: DATE_CREATED_ASCENDING,
  });
}


export default createList;