import Config from "./config.js";
import ApiAction from "src/models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";


const DESTROY_ALL_CARDS = ApiAction<Config>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default DESTROY_ALL_CARDS;