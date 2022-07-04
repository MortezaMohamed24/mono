import cm from "src/models/checkitem/crud"
import {Oid} from "#util/oid"
import Error from "#util/error"
import Checkitem from "src/models"
import {NOT_FOUND} from "src/models/checkitem/errors"
import {ActionFactoryConfig} from "src/models/util/apiAction"


interface Argument<Config extends ActionFactoryConfig> {
  checkitemKey: keyof Config["locals"]
  idCheckitemKey: keyof Config["body"]
}


function PopulateCheckitem({sourceKey, checkitemKey, idCheckitemKey}) {
  return async (request, response, proceed) => {
    const source = request[sourceKey]
    const idCheckitem = source[idCheckitemKey]
    const checklist = await cm.f({idUser: request.idUser})
    
    if (!checklist) {
      throw new Error(400, NOT_FOUND)
    }
    
    set({[checkitemKey]: checklist} as {[Key in CheckitemKey]?: Checkitem})
  }


  return populateCheckitemByBody
}


export {PopulateCheckitemByBody}
export default PopulateCheckitemByBody