import {produce} from "immer";

import {Request} from "express";
import {Response} from "express";

import {Middleware, MiddlewareArgument} from "./types.js";
import {ActionFactoryConfig} from "./types.js";
import {ActionFactoryArgument} from "./types.js";

import OptionalBodyValidator from "./optionalBodyValidator.js";
import OptionalQueryValidator from "./optionalQueryValidator.js";
import OptionalAuthorityChecker from "./optionalAuthorityChecker.js";


function ApiAction<Config extends ActionFactoryConfig>(arg: ActionFactoryArgument<Config>) {
  const middlewares: Middleware<Config>[] = [];


  const isAuthorized = OptionalAuthorityChecker(arg.authorized);
  const validateBody = OptionalBodyValidator(arg.bodyCheckable, arg.bodyError);
  const validateQuery = OptionalQueryValidator(arg.queryCheckable, arg.queryError);


  const action = async (req: Request, res: Response) => {
    const body = validateBody(req) as Parameters<Middleware<Config>>[0]["body"];
    const query = validateQuery(req) as Parameters<Middleware<Config>>[0]["query"];
    const idUser = isAuthorized(req) as Parameters<Middleware<Config>>[0]["idUser"];


    let send = undefined as unknown as Config["return"];
    let locals = undefined as unknown as Config["locals"];
    let argument = Object.freeze({req, res, get, set, body, query, idUser}) as unknown as MiddlewareArgument<Config>


    function get() {
      return locals;
    }

    function set(newLocals:  Config["locals"]) {
      return locals = produce(
        locals, 
        (currLocals) => ({
          ...currLocals, 
          ...newLocals,
        }),
      );
    }


    set({});


    for (let middleware of middlewares) {
      send = await middleware(argument);
    }
    

    if (send) {
      res.send(send);
    } else {
      res.send(undefined)
    }
  }

  action.push = (...moreMiddlewares: Middleware<Config>[]) => {
    middlewares.push(...moreMiddlewares);
  };


  return action;
}


export default ApiAction;