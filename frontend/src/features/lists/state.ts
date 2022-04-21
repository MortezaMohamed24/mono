import "./actions/init";
import "./reducers/init";
import {useSlice} from "../../store";
import Collection from "/util/redux/collection";
import {ListNative} from "./entity";


const LISTS_SLICE_NAME = "lt";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [LISTS_SLICE_NAME]: Collection<ListNative>;
  }
}


useSlice(LISTS_SLICE_NAME, () => (
  new Collection<ListNative>()
));