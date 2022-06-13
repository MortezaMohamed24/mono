import Config from "./config.js";
import ApiAction from "src/models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";


const COPY = ApiAction<Config>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});



export default COPY;