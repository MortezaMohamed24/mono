import Config from "./config.js";
import ApiAction from "#models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";


const MOVE_ALL_OWN_CARDS = ApiAction<Config>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default MOVE_ALL_OWN_CARDS;