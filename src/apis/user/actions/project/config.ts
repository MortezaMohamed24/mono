import User from "src/User";
import QueryType from "./queryType.js";
import ReturnType from "./returnType.js";


interface UserProjectActionConfig {
  body: undefined;
  query: QueryType;
  return: ReturnType;
  locals: {
    /** The user to project */
    user: User;
  };
  authorized: true;
}


export default UserProjectActionConfig;