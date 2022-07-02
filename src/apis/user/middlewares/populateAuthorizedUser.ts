import ur from "src/models/user/crud";
import User from "src/models/user/model";
import Error from "#util/error";
import {Oid} from "#util/oid";
import {NOT_FOUND} from "src/models/user/errors";
import {ActionFactoryConfig} from "src/models/util/apiAction";


function PopulateUser<
  Config extends ActionFactoryConfig,
  UserKey extends keyof Config["locals"],
>({userKey}: {
  userKey: UserKey;
}) {


  interface Argument {
    set(locals: {[Key in UserKey]?: User}): void;
    idUser: Oid;
  }

  async function populateUser({set, idUser}: Argument) {
    const user = await ur.f(idUser);

    if (!user) {
      throw new Error(400, NOT_FOUND);
    }

    set({[userKey]: user} as {[Key in UserKey]?: User});
  }


  return populateUser;
}


export {PopulateUser};
export default PopulateUser;