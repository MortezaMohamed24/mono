import editCard from "./reducers/edit";
import labelCard from "./reducers/label";
import addOneCard from "./reducers/addOne";
import createCard from "./reducers/create";
import unlabelCard from "./reducers/unlabel";
import addManyCards from "./reducers/addMany";
import setCardLabels from "./reducers/setLabels";
import destroyOneCard from "./reducers/destroyOne";



export {
  editCard,
  labelCard,
  addOneCard,
  createCard,
  destroyOneCard,
  unlabelCard,
  addManyCards,
  setCardLabels,
};


export default Object.freeze({
  edit: editCard,
  labe: labelCard,
  addOne: addOneCard,
  create: createCard,
  unlabel: unlabelCard,
  addMany: addManyCards,
  setLabels: setCardLabels,
  destroyOne: destroyOneCard,
});