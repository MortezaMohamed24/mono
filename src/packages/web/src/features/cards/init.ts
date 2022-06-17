import "./actions/init";
import "./reducers/init";
import {useSlice} from "/store";
import Collection from "/util/redux/collection";
import {CardNative} from "./entity";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: Collection<CardNative>;
  }
}


export const NAME = "cd";


useSlice(NAME, () => (
  new Collection<CardNative>()
));