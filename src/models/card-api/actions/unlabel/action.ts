import ApiAction from "src/models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";
import CardCreateActionConfig from "./config.js";


const ACTION = ApiAction<CardCreateActionConfig>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default ACTION;