import User from "src/models/user";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface UserCreateActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The created user */
    user: User;
  };
  authorized: false;
}


export default UserCreateActionConfig;