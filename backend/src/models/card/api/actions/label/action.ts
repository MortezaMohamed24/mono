import ApiAction from "#models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";
import CardLabelActionConfig from "./config.js";


const ACTION = ApiAction<CardLabelActionConfig>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default ACTION;