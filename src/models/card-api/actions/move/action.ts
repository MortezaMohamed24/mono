import ApiAction from "src/models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";
import CardMoveRequestConfig from "./config.js";


const ACTION = ApiAction<CardMoveRequestConfig>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default ACTION;