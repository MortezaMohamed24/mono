import "./actions/init";
import "./reducers/init";
import Collection from "/util/redux/collection";
import {CardNative} from "./entity";


export const NAME = "cd";

export function initialState() {
  return new Collection<CardNative>();
}

declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: Collection<CardNative>;
  }
}


export default Object.freeze({NAME, initialState});