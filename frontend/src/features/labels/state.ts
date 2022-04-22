import "./actions/init";
import "./reducers/init";
import Collection from "/util/redux/collection";
import {LabelNative} from "./entity";


export const NAME = "ll";

export function initialState() {
  return new Collection<LabelNative>();
}

declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: Collection<LabelNative>;
  }
}


export default Object.freeze({NAME, initialState});