import BodyType from "./bodyType.js";
import Checkitem from "src/models";
import ReturnType from "./returnType.js";


interface CheckitemEditActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The checkitem to edit */
    checkitem: Checkitem;
  };
  authorized: true;
}


export default CheckitemEditActionConfig;