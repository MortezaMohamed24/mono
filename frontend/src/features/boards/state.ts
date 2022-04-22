import "./actions/init";
import "./reducers/init";
import Collection from "/util/redux/collection";
import {BoardNative} from "./entity/native";


export const NAME = "bd";

export function initialState() {
  return new Collection<BoardNative>();
}

declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: Collection<BoardNative>
  }
}


export default Object.freeze({NAME, initialState});