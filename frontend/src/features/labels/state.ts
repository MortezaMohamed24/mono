import "./actions/init";
import "./reducers/init";
import {useSlice} from "../../store";
import Collection from "/util/redux/collection";
import {LabelNative} from "./entity";


const LABELS_SLICE_NAME = "ll";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [LABELS_SLICE_NAME]: Collection<LabelNative>;
  }
}


useSlice(LABELS_SLICE_NAME, () => (
  new Collection<LabelNative>()
));