import lt from "src/models/list/crud";
import User from "src/models/user";


function lists(this: User) {
  return lt.fm({idUser: this.id});
}


export default lists;