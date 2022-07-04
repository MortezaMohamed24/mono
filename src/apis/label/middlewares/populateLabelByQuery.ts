import ll from "src/models/label/crud";
import {Oid} from "#util/oid";
import Label from "src/models/label/Label";
import Error from "#util/error";
import {NOT_FOUND} from "src/models/label/errors";
import {ActionFactoryConfig} from "src/models/util/apiAction";


function PopulateLabelByQuery<
  Config extends ActionFactoryConfig,
  LabelKey extends keyof Config["locals"],
  IdLabelKey extends keyof Config["query"],
>({labelKey, idLabelKey}: {
  labelKey: LabelKey;
  idLabelKey: IdLabelKey;
}) {

  interface Argument {
    set(locals: {[Key in LabelKey]?: Label}): void; 
    query: {[Key in IdLabelKey]: Oid};
    idUser: Oid;
  }
  
  async function populateLabelByQuery({set, query, idUser}: Argument) {
    const label = await ll.f(query[idLabelKey], {idUser});
  
    if (!label) {
      throw new Error(400, NOT_FOUND);
    }
  
    set({[labelKey]: label} as {[Key in LabelKey]?: Label});
  }


  return populateLabelByQuery;
}


export default PopulateLabelByQuery;