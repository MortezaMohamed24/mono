import cm from "#models/checkitem/crud";
import User from "#models/user";


function checkitems(this: User) {
  return cm.fm({idUser: this.id});
}


export default checkitems;