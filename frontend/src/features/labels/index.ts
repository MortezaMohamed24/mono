import "./init";
import thunks from "./actions";
import selectors from "./selectors";


const one = selectors.one;
const many = selectors.many;
const edit = thunks.edit;
const create = thunks.create;
const destroy = thunks.destroy;


export {
  one,
  many,
  edit,
  create,
  destroy,
};

export default Object.freeze({
  one,
  many,
  edit,
  create,
  destroy,
});