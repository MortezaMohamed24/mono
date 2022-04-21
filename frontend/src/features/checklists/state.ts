import "./actions/init";
import "./reducers/init";
import {useSlice} from "../../store";
import Collection from "/util/redux/collection";
import {ChecklistNative} from "./entity";


const CHECKLISTS_SLICE_NAME = "ct";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [CHECKLISTS_SLICE_NAME]: Collection<ChecklistNative>
  }
}


useSlice(CHECKLISTS_SLICE_NAME, () => (
  new Collection<ChecklistNative>()
));