import "./actions/init";
import "./reducers/init";
import {useSlice} from "../../store";
import Collection from "/util/redux/collection";
import {CardNative} from "./entity";


const CARDS_SLICE_NAME = "cd";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [CARDS_SLICE_NAME]: Collection<CardNative>;
  }
}


useSlice(CARDS_SLICE_NAME, () => (
  new Collection<CardNative>()
));