import editCheckitem from "./reducers/edit";
import moveCheckitem from "./reducers/move";
import addOneCheckitem from "./reducers/addOne";
import destroyCheckitem from "./reducers/destroy";
import addManyCheckitems from "./reducers/addMany";


export {
  editCheckitem,
  moveCheckitem,
  addOneCheckitem,
  destroyCheckitem,
  addManyCheckitems,
}


export default Object.freeze({
  edit: editCheckitem,
  move: moveCheckitem,
  addOne: addOneCheckitem,
  destroy: destroyCheckitem,
  addMany: addManyCheckitems,
})