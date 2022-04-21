import cd from "#models/card/crud";
import {Oid} from "#util/oid";
import Card from "#models/card";
import Error from "#util/error";
import {NOT_FOUND} from "#models/card/errors";
import {ActionFactoryConfig} from "#models/util/apiAction";


function PopulateCardByQuery<
  Config extends ActionFactoryConfig,
  CardKey extends keyof Config["locals"],
  IdCardKey extends keyof Config["query"],
>({cardKey, idCardKey}: {
  cardKey: CardKey;
  idCardKey: IdCardKey;
}) {

  interface Argument {
    set(locals: {[Key in CardKey]?: Card}): void; 
    query: {[Key in IdCardKey]: Oid};
    idUser: Oid;
  }
  
  async function populateCardByQuery({set, query, idUser}: Argument) {
    const card = await cd.f(query[idCardKey], {idUser});
  
    if (!card) {
      throw new Error(400, NOT_FOUND);
    }
  
    set({[cardKey]: card} as {[Key in CardKey]?: Card});
  }


  return populateCardByQuery;
}


export default PopulateCardByQuery;