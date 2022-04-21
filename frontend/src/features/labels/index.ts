import "./state";
import thunks from "/labels/actions";
import selectors from "/labels/selectors";


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