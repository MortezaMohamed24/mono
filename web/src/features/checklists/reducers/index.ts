import editChecklist from "./reducers/edit";
import addOneChecklist from "./reducers/addOne";
import createChecklist from "./reducers/create";
import destroyChecklist from "./reducers/destroy";
import addManyChecklists from "./reducers/addMany";


export {
  editChecklist,
  addOneChecklist,
  createChecklist,
  destroyChecklist,
  addManyChecklists,
}


export default Object.freeze({
  edit: editChecklist,
  addOne: addOneChecklist,
  create: createChecklist,
  destroy: destroyChecklist,
  addMany: addManyChecklists,
});