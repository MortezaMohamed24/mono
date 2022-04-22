import "./actions/init";
import "./reducers/init";
import Collection from "/util/redux/collection";
import {ListNative} from "./entity";


export const NAME = "lt";

export function initialState() {
  return new Collection<ListNative>();
}

declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: Collection<ListNative>;
  }
}


export default Object.freeze({NAME, initialState});