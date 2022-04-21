import cd from "#models/card/crud";
import User from "#models/user";


function cards(this: User) {
  return cd.fm({idUser: this.id});
}


export default cards;