import User from "src/User";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface UserDestroyActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The user to destroy */
    user: User;
  };
  authorized: true;
}


export default UserDestroyActionConfig;