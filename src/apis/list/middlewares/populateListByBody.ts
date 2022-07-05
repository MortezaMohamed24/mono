import lt from "src/models/list/crud";
import {Oid} from "#util/oid";
import List from "src/models/list/List";
import Error from "#util/error";
import {NOT_FOUND} from "src/models/list/errors";
import {ActionFactoryConfig} from "src/models/util/apiAction";


function PopulateListByBody<
  Config extends ActionFactoryConfig,
  ListKey extends keyof Config["locals"],
  IdListKey extends keyof Config["body"],
>({listKey, idListKey}: {
  listKey: ListKey;
  idListKey: IdListKey;
}) {

  interface Argument {
    set(locals: {[Key in ListKey]?: List}): void; 
    body: {[Key in IdListKey]: Oid};
    idUser: Oid;
  }
  
  async function populateListByBody({set, body, idUser}: Argument) {
    const list = await lt.f(body[idListKey], {idUser});
  
    if (!list) {
      throw new Error(400, NOT_FOUND);
    }
  
    set({[listKey]: list} as unknown as {[Key in ListKey]?: List});
  }


  return populateListByBody;
}


export default PopulateListByBody;