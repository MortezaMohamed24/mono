import "./state";
import thunks from "/lists/actions";
import selectors from "/lists/selectors";


export const one = selectors.one;
export const many = selectors.many;
export const move = thunks.move;
export const edit = thunks.edit;
export const copy = thunks.copy;
export const sort = thunks.sort;
export const create = thunks.create;
export const destroy = thunks.destroy;
export const moveAllOwnCards = thunks.moveAllOwnCards;
export const destroyAllOwnCards = thunks.destroyAllOwnCards;


export default Object.freeze({
  one,
  many,
  edit,
  move,
  copy,
  sort,
  create,
  destroy,
  moveAllOwnCards,
  destroyAllOwnCards,
})