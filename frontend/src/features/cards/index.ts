import "./state";
import thunks from "/cards/actions";
import selectors from "/cards/selectors";

const move = thunks.move;
const copy = thunks.copy;
const edit = thunks.edit;
const label = thunks.label;
const create = thunks.create;
const destroy = thunks.destroy;
const unlabel = thunks.unlabel;
const setLabels = thunks.setLabels;

const ids = selectors.ids;
const one = selectors.one;
const many = selectors.many;
const opened = selectors.opened;
const entities = selectors.entities;


export {
  move,
  copy,
  edit,
  label,
  create,
  destroy,
  unlabel,
  setLabels,
  ids,
  one,
  many,
  opened,
  entities,
};

export default Object.freeze({
  move,
  copy,
  edit,
  label,
  create,
  destroy,
  unlabel,
  setLabels,
  ids,
  one,
  many,
  opened,
  entities,
});