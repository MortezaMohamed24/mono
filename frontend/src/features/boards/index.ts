import "./state";
import search from "./util/search";
import thunks from "./actions";
import selectors from "./selectors";


const ids = selectors.ids;
const one = selectors.one;
const many = selectors.many;
const count = selectors.count;
const opened = selectors.opened;
const entities = selectors.entities;

const edit = thunks.edit;
const copy = thunks.copy;
const create = thunks.create;
const destroy = thunks.destroy


export {
  ids,
  one,
  many,
  count,
  opened,
  entities,
  edit,
  copy,
  create,
  destroy,
  search,
}


export default Object.freeze({
  ids,
  one,
  many,
  count,
  opened,
  entities,
  edit,
  copy,
  create,
  destroy,
  search,
})