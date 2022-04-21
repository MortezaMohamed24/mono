import {Oid} from "#util/oid";
import {Request} from "express";
import {Response} from "express";
import {INVALID} from "#util/checker";
import {Checkable} from "#util/checker";


export type ActionFactoryConfig = {
  body: object | undefined;
  query: object | undefined;
  return: object | void;
  locals: {[key: string]: unknown};
  authorized: boolean;
}

export type ActionFactoryArgument<Config extends ActionFactoryConfig = ActionFactoryConfig> = {
  bodyError?: Config["body"] extends undefined ? undefined : string;
  queryError?: Config["query"] extends undefined ? undefined : string;
  authorized: Config["authorized"];
  bodyCheckable: Config["body"] extends undefined ? undefined : Checkable<Config["body"]>;
  queryCheckable: Config["query"] extends undefined ? undefined : Checkable<Config["query"]>;
}


export type Middleware<Config extends ActionFactoryConfig> = {
  (apiArg: MiddlewareArgument<Config>): (
    Config["return"] extends undefined
      ? | void
        | Promise<void>
      : | void 
        | Config["return"]
        | Promise<void> 
        | Promise<Config["return"]>
  )
}

export type MiddlewareArgument<Config extends ActionFactoryConfig> = {
  get(): Config["locals"];
  set(newLocals: Partial<Config["locals"]>): Config["locals"];

  req: Request;
  res: Response;
  
  body: Config["body"]; 
  query: Config["query"]; 
  idUser: Config["authorized"] extends true ? Oid : undefined;
}

export type ReturnOfCheckable<_Checkable extends Checkable> = Exclude<ReturnType<_Checkable["check"]>, INVALID> 


type Partial<T extends object> = {
  [Key in keyof T]?: T[Key] extends object ? Partial<T[Key]> : T[Key]
}