import "./actions/init";
import "./reducers/init";
import {useSlice} from "/store";
import Collection from "/util/redux/collection";
import {CheckitemNative} from "./entity";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: Collection<CheckitemNative>
  }
}


export const NAME = "cm";


useSlice(NAME, () => (
  new Collection<CheckitemNative>()
));