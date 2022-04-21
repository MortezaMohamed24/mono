import ApiAction from "#models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";
import CardCreateActionConfig from "./config.js";


const CREATE = ApiAction<CardCreateActionConfig>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default CREATE;