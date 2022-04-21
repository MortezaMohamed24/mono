import "./actions/init";
import "./reducers/init";
import {useSlice} from "../../store";
import Collection from "/util/redux/collection";
import {CheckitemNative} from "./entity";


const CHECKITEMS_SLICE_NAME = "cm";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [CHECKITEMS_SLICE_NAME]: Collection<CheckitemNative>
  }
}


useSlice(CHECKITEMS_SLICE_NAME, () => (
  new Collection<CheckitemNative>()
));