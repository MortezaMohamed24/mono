import "./actions/init";
import "./reducers/init";
import {useSlice} from "/store";
import Collection from "/util/redux/collection";
import {ChecklistNative} from "./entity";


export const NAME = "ct";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: Collection<ChecklistNative>
  }
}


useSlice(NAME, () => (
  new Collection<ChecklistNative>()
));