import "./actions/init";
import "./reducers/init";
import {useSlice} from "/store";
import Collection from "/util/redux/collection";
import {ListNative} from "./entity";


export const NAME = "lt";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: Collection<ListNative>;
  }
}


useSlice(NAME, () => (
  new Collection<ListNative>()
));