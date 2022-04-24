import "./actions/init";
import "./reducers/init";
import {useSlice} from "/store";
import Collection from "/util/redux/collection";
import {BoardNative} from "./entity/native";


export const NAME = "bd";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: Collection<BoardNative>
  }
}


useSlice(NAME, () => (
  new Collection<BoardNative>()
));