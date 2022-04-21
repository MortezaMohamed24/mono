import editList from "./reducers/edit";
import createList from "./reducers/create";
import addOneList from "./reducers/addOne";
import addManyLists from "./reducers/addMany";
import destroyOneList from "./reducers/destroyOne";
import destroyManyLists from "./reducers/destroyMany";
import destroyAllOwnCardsOfList from "./reducers/destroyAllOwnCards";


export {
  editList,
  createList,
  addOneList,
  addManyLists,
  destroyOneList,
  destroyManyLists,
  destroyAllOwnCardsOfList,
}


export default Object.freeze({
  editList,
  createList,
  addOneList,
  addManyLists,
  destroyOneList,
  destroyManyLists,
  destroyAllOwnCardsOfList,
})