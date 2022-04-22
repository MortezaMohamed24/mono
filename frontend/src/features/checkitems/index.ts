import "./state";
import thunks from "./actions";
import selectors from "./selectors";


const one = selectors.one;
const many = selectors.many;
const count = selectors.count;
const edit = thunks.edit;
const move = thunks.move;
const create = thunks.create;
const destroy = thunks.destroy;


export {one, many, count, edit, move, create, destroy};
export default Object.freeze({one, many, count, move, edit, create, destroy});