import "./actions/init";
import "./reducers/init";
import Collection from "/util/redux/collection";
import {ChecklistNative} from "./entity";


export const NAME = "ct";

export function initialState() { 
  return new Collection<ChecklistNative>();
}

declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: Collection<ChecklistNative>
  }
}


export default Object.freeze({NAME, initialState});