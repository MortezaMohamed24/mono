import Error from "#util/error";
import {Request} from "express";
import {Response} from "express";
import {NextFunction} from "express";


/**
 * Checks whether client is authorized. if so, invokes `next`, 
 * otherwise, throws a `401 (Unauthorized)` error
 */
const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    throw new Error(401, "Unauthorized");
  }
};


export default isAuthorized;