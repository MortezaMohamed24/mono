import lt from "#models/list/crud";
import User from "#models/user";


function lists(this: User) {
  return lt.fm({idUser: this.id});
}


export default lists;