import cm from "#models/checkitem/crud";
import {Oid} from "#util/oid";
import Error from "#util/error";
import Checkitem from "#models/checkitem";
import {NOT_FOUND} from "#models/checkitem/errors";
import {ActionFactoryConfig} from "#models/util/apiAction";


function PopulateCheckitemByQuery<
  Config extends ActionFactoryConfig,
  CheckitemKey extends keyof Config["locals"],
  IdCheckitemKey extends keyof Config["query"],
>({checkitemKey, idCheckitemKey}: {
  checkitemKey: CheckitemKey;
  idCheckitemKey: IdCheckitemKey;
}) {
  interface Argument {
    set(locals: {[Key in CheckitemKey]?: Checkitem}): void;
    query: {[Key in IdCheckitemKey]: Oid};
    idUser: Oid; 
  }

  async function populateCheckitemByQuery({set, query, idUser}: Argument) {
    const checklist = await cm.f(query[idCheckitemKey], {idUser});
    
    if (!checklist) {
      throw new Error(400, NOT_FOUND);
    }
    
    set({[checkitemKey]: checklist} as {[Key in CheckitemKey]?: Checkitem});
  }


  return populateCheckitemByQuery;
}


export {PopulateCheckitemByQuery};
export default PopulateCheckitemByQuery;