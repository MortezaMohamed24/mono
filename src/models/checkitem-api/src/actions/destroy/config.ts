import BodyType from "./bodyType.js";
import Checkitem from "src/models/checkitem";
import ReturnType from "./returnType.js";


interface CheckitemDestroyActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The checkitem to destroy */
    checkitem: Checkitem;
  };
  authorized: true;
}


export default CheckitemDestroyActionConfig;