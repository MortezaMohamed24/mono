import User from "src/User";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface User$ActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The user to edit */
    user: User;
  };
  authorized: true;
}


export default User$ActionConfig;