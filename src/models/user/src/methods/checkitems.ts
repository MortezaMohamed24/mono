import cm from "src/models/checkitem/crud";
import User from "src/models/user";


function checkitems(this: User) {
  return cm.fm({idUser: this.id});
}


export default checkitems;