import editLabel from "./reducers/edit";
import createLabel from "./reducers/create";
import addOneLabel from "./reducers/addOne";
import addManyLabels from  "./reducers/addMany";
import destroyOneLabel from "./reducers/destroyOne";
import destroyManyLabels from "./reducers/destroyMany";


export {
  editLabel,
  createLabel,
  addOneLabel,
  addManyLabels,
  destroyOneLabel,
  destroyManyLabels,
}


export default Object.freeze({
  editLabel,
  createLabel,
  addOneLabel,
  addManyLabels,
  destroyOneLabel,
  destroyManyLabels,
})