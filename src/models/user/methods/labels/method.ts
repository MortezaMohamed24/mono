import ll from "src/models/label/crud";
import User from "src/models/user";


function labels(this: User) {
  return ll.fm({idUser: this.id});
}


export default labels;