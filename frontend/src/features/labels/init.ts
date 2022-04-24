import "./actions/init";
import "./reducers/init";
import {useSlice} from "/store";
import Collection from "/util/redux/collection";
import {LabelNative} from "./entity";


export const NAME = "ll";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: Collection<LabelNative>;
  }
}


useSlice(NAME, () => (
  new Collection<LabelNative>()
));