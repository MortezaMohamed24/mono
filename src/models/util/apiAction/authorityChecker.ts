import {Oid} from "#util/oid";
import Error from "#util/error";
import {Request} from "src/packages/express/express";


const AuthorityChecker = () => (request: Request) => {
  if (request.user instanceof Oid) {
    return request.user;
  } else {
    throw new Error(401, "Unauthorized");
  }
};


export default AuthorityChecker;