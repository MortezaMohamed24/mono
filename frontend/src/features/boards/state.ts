import "./actions/init";
import "./reducers/init";
import {useSlice} from "../../store";
import Collection from "/util/redux/collection";
import {BoardNative} from "./entity/native";


const BOARDS_STATE_NAME = "bd";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [BOARDS_STATE_NAME]: Collection<BoardNative>
  }
}


useSlice(BOARDS_STATE_NAME, () => (
  new Collection<BoardNative>()
));