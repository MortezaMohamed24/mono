import "./actions/init";
import "./reducers/init";
import Collection from "/util/redux/collection";
import {CheckitemNative} from "./entity";


export const NAME = "cm";

export function initialState() {
  return new Collection<CheckitemNative>();
}

declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: Collection<CheckitemNative>
  }
}


export default Object.freeze({NAME, initialState});