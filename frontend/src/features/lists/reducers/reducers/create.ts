import {State} from "../../../../store";
import addOneList from "./addOne";
import {ListCreateRequestMeta} from "/lists/actions";
import {DATE_CREATED_ASCENDING} from "/lists/fields";


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