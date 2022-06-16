import "./actions/init";
import "./reducers/init";


export * from "./init";
export * from "./actions";
export * from "./selectors";


import {NAME} from "./init";
import actions from "./actions";
import selectors from "./selectors";


export default Object.freeze({
  NAME,
  ...actions,
  ...selectors,
});