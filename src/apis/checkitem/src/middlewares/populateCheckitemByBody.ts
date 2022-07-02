import cm from "src/models/checkitem/crud";
import {Oid} from "#util/oid";
import Error from "#util/error";
import Checkitem from "src/models/checkitem";
import {NOT_FOUND} from "src/models/checkitem/errors";
import {ActionFactoryConfig} from "src/models/util/apiAction";


interface Argument<Config extends ActionFactoryConfig> {
  checkitemKey: keyof Config["locals"];
  idCheckitemKey: keyof Config["body"];
}


function PopulateCheckitemByBody<
  Config extends ActionFactoryConfig,
  CheckitemKey extends keyof Config["locals"],
  IdCheckitemKey extends keyof Config["body"],
>({checkitemKey, idCheckitemKey}: {
  checkitemKey: CheckitemKey;
  idCheckitemKey: IdCheckitemKey;
}) {
  interface Argument {
    set(locals: {[Key in CheckitemKey]?: Checkitem}): void;
    body: {[Key in IdCheckitemKey]: Oid};
    idUser: Oid; 
  }

  async function populateCheckitemByBody({set, body, idUser}: Argument) {
    const checklist = await cm.f(body[idCheckitemKey], {idUser});
    
    if (!checklist) {
      throw new Error(400, NOT_FOUND);
    }
    
    set({[checkitemKey]: checklist} as {[Key in CheckitemKey]?: Checkitem});
  }


  return populateCheckitemByBody;
}


export {PopulateCheckitemByBody};
export default PopulateCheckitemByBody;