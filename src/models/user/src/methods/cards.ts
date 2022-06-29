import cd from "src/models/card/crud";
import User from "src/models/user";


function cards(this: User) {
  return cd.fm({idUser: this.id});
}


export default cards;