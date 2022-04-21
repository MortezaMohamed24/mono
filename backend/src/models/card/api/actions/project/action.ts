import ApiAction from "#models/util/apiAction";
import queryCheckable from "./queryCheckable.js";
import CardProjectActionConfig from "./config.js";


const PROJECT = ApiAction<CardProjectActionConfig>({
  authorized: true,
  bodyCheckable: undefined,
  queryCheckable: queryCheckable,
});


export default PROJECT;