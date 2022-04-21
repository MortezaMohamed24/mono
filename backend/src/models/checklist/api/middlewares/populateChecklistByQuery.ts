import ct from "#models/checklist/crud";
import {Oid} from "#util/oid";
import Error from "#util/error";
import Checklist from "#models/checklist/model";
import {NOT_FOUND} from "#models/checklist/errors";
import {ActionFactoryConfig} from "#models/util/apiAction";


function PopulateChecklistByQuery<
  Config extends ActionFactoryConfig,
  ChecklistKey extends keyof Config["locals"],
  IdChecklistKey extends keyof Config["query"],
>({checklistKey, idChecklistKey}: {
  checklistKey: ChecklistKey,
  idChecklistKey: IdChecklistKey,  
}) {

  interface Argument {
    set(locals: {[Key in typeof checklistKey]?: Checklist}): void;
    query: {[Key in typeof idChecklistKey]: Oid};
    idUser: Oid; 
  }

  async function populateChecklistByQuery({set, query, idUser}: Argument) {
    const checklist = await ct.f(query[idChecklistKey], {idUser});
    
    if (!checklist) {
      throw new Error(400, NOT_FOUND);
    }
    
    set({[checklistKey]: checklist} as {[Key in ChecklistKey]?: Checklist});
  }


  return populateChecklistByQuery;
}


export {PopulateChecklistByQuery};
export default PopulateChecklistByQuery;