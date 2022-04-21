import ApiAction from "#models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";
import CardSetLabelsActionConfig from "./config.js";


const SET_LABELS = ApiAction<CardSetLabelsActionConfig>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default SET_LABELS;