import cd from "src/models/card/crud";
import {Oid} from "#util/oid";
import Card from "src/Card";
import Error from "#util/error";
import {NOT_FOUND} from "src/models/card/errors";
import {ActionFactoryConfig} from "src/models/util/apiAction";


function PopulateCardByBody<
  Config extends ActionFactoryConfig,
  CardKey extends keyof Config["locals"],
  IdCardKey extends keyof Config["body"],
>({cardKey, idCardKey}: {
  cardKey: CardKey;
  idCardKey: IdCardKey;
}) {

  interface Argument {
    set(locals: {[Key in CardKey]?: Card}): void; 
    body: {[Key in IdCardKey]: Oid};
    idUser: Oid;
  }
  
  async function populateCardByBody({set, body, idUser}: Argument) {
    const card = await cd.f(body[idCardKey], {idUser});
  
    if (!card) {
      throw new Error(400, NOT_FOUND);
    }
  
    set({[cardKey]: card} as {[Key in CardKey]?: Card});
  }


  return populateCardByBody;
}


export default PopulateCardByBody;