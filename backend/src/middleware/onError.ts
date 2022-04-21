import Error from "#util/error";
import {Request} from "express";
import {Response} from "express";
import {NextFunction} from "express";


/**
 * meant to handle all express errors.
 */
function onError(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof Error && [400, 401, 404].includes(err.status)) {
    res.status(err.status).send(err.message);
  } 
  
  else {
    res.status(500).send();
  }
  
  console.log(err);
};


export default onError;