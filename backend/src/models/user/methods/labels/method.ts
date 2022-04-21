import ll from "#models/label/crud";
import User from "#models/user";


function labels(this: User) {
  return ll.fm({idUser: this.id});
}


export default labels;