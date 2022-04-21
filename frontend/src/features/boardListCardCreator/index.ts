import "./actions/init";
import "./reducers/init";


export * from "./slice";
export * from "./actions";
export * from "./selectors";


import slice from "./slice";
import actions from "./actions";
import selectors from "./selectors";


export default Object.freeze({
  ...slice,
  ...actions,
  ...selectors,
});