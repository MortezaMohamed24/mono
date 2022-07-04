import {Customize} from "express"
import {ManagerAuthorized} from "authenticator"
import {ManagerCustomization} from "authenticator"

import BodyType from "./bodyType.js";
import Checkitem from "src/models";
import Checklist from "src/models/checklist";
import ReturnType from "./returnType.js";


type Stop0 = (
  ManagerCustomization<any, "AUTH">
)

type Stop1 = Customize<{
  AUTH: ManagerAuthorized<any>
}, {}, false, Stop0>

type merge = ""
type expect = ""
type modify = ""


interface CheckitemCreateActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The checklist for which to create a checkitem */
    checklist: Checklist;
    /** The created checkitem */ 
    checkitem: Checkitem;
  };
  authorized: true;
}


export default CheckitemCreateActionConfig;


type ReqBody = {
  /** The id for the checkitem to create */
  readonly id?: Oid | undefined;
  /** The checkitem's content. */
  readonly content: string;
  /** The id of the checklist for which to create a checkitem. */
  readonly idChecklist: Oid;
}

type ResBody  = (
  CheckitemDocumentJSON
)
