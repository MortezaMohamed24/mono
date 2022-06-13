import CheckitemMoveActionConfig from "./config.js";
import ApiAction from "src/models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";


const MOVE = ApiAction<CheckitemMoveActionConfig>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default MOVE;