import lt from "#models/list/crud";
import {Oid} from "#util/oid";
import List from "#models/list";
import Error from "#util/error";
import {NOT_FOUND} from "#models/list/errors";
import {ActionFactoryConfig} from "#models/util/apiAction";


function PopulateListByBody<
  Config extends ActionFactoryConfig,
  ListKey extends keyof Config["locals"],
  IdListKey extends keyof Config["query"],
>({listKey, idListKey}: {
  listKey: ListKey;
  idListKey: IdListKey;
}) {

  interface Argument {
    set(locals: {[Key in ListKey]?: List}): void; 
    query: {[Key in IdListKey]: Oid};
    idUser: Oid;
  }
  
  async function populateListByBody({set, query, idUser}: Argument) {
    const list = await lt.f(query[idListKey], {idUser});
  
    if (!list) {
      throw new Error(400, NOT_FOUND);
    }
  
    set({[listKey]: list} as unknown as {[Key in ListKey]?: List});
  }


  return populateListByBody;
}


export default PopulateListByBody;