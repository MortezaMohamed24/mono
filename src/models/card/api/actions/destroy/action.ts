import ApiAction from "src/models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";
import CardDestroyActionConfig from "./config.js";


const DESTROY = ApiAction<CardDestroyActionConfig>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default DESTROY;