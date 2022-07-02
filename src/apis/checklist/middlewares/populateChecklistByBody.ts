import ct from "src/models/checklist/crud";
import {Oid} from "#util/oid";
import Error from "#util/error";
import Checklist from "src/models/checklist/model";
import {NOT_FOUND} from "src/models/checklist/errors";
import {ActionFactoryConfig} from "src/models/util/apiAction";


function PopulateChecklistByBody<
  Config extends ActionFactoryConfig,
  ChecklistKey extends keyof Config["locals"],
  IdChecklistKey extends keyof Config["body"],
>({checklistKey, idChecklistKey}: {
  checklistKey: ChecklistKey,
  idChecklistKey: IdChecklistKey,  
}) {

  interface Argument {
    set(locals: {[Key in typeof checklistKey]?: Checklist}): void;
    body: {[Key in typeof idChecklistKey]: Oid};
    idUser: Oid; 
  }

  async function populateChecklistByBody({set, body, idUser}: Argument) {
    const checklist = await ct.f(body[idChecklistKey], {idUser});
    
    if (!checklist) {
      throw new Error(400, NOT_FOUND);
    }
    
    set({[checklistKey]: checklist} as {[Key in ChecklistKey]?: Checklist});
  }


  return populateChecklistByBody;
}


export {PopulateChecklistByBody};
export default PopulateChecklistByBody;