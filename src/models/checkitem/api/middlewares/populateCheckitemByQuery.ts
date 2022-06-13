import cm from "src/models/checkitem/crud";
import {Oid} from "#util/oid";
import Error from "#util/error";
import Checkitem from "src/models/checkitem";
import {NOT_FOUND} from "src/models/checkitem/errors";
import {ActionFactoryConfig} from "src/models/util/apiAction";


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