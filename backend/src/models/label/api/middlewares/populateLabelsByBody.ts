import ll from "#models/label/crud";
import {Oid} from "#util/oid";
import Label from "#models/label";
import Error from "#util/error";
import {NOT_FOUND} from "#models/label/errors";
import {ActionFactoryConfig} from "#models/util/apiAction";


function PopulateLabelsByBody<
  Config extends ActionFactoryConfig,
  LabelsKey extends keyof Config["locals"],
  IdLabelKey extends keyof Config["body"],
>({labelsKey, idLabelsKey}: {
  labelsKey: LabelsKey;
  idLabelsKey: IdLabelKey;
}) {

  interface Argument {
    set(locals: {[Key in LabelsKey]?: Label[]}): void; 
    body: {[Key in IdLabelKey]: Oid[]};
    idUser: Oid;
  }
  
  async function populateLabelsByBody({set, body, idUser}: Argument) {
    const labels = await ll.fm(body[idLabelsKey], {idUser});
  
    if (!labels) {
      throw new Error(400, NOT_FOUND);
    }
  
    set({[labelsKey]: labels} as {[Key in LabelsKey]?: Label[]});
  }


  return populateLabelsByBody;
}


export default PopulateLabelsByBody;