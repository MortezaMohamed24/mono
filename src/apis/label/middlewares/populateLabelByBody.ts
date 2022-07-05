import ll from "src/models/label/crud";
import {Oid} from "#util/oid";
import Card from "src/models/label/Label";
import Error from "#util/error";
import {NOT_FOUND} from "src/models/label/errors";
import {ActionFactoryConfig} from "src/models/util/apiAction";


function PopulateLabelByBody<
  Config extends ActionFactoryConfig,
  LabelKey extends keyof Config["locals"],
  IdLabelKey extends keyof Config["body"],
>({labelKey, idLabelKey}: {
  labelKey: LabelKey;
  idLabelKey: IdLabelKey;
}) {

  interface Argument {
    set(locals: {[Key in LabelKey]?: Card}): void; 
    body: {[Key in IdLabelKey]: Oid};
    idUser: Oid;
  }
  
  async function populateLabelByBody({set, body, idUser}: Argument) {
    const label = await ll.f(body[idLabelKey], {idUser});
  
    if (!label) {
      throw new Error(400, NOT_FOUND);
    }
  
    set({[labelKey]: label} as {[Key in LabelKey]?: Card});
  }


  return populateLabelByBody;
}


export default PopulateLabelByBody;