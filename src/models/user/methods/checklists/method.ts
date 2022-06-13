import ct from "src/models/checklist/crud";
import User from "src/models/user";


function checklists(this: User) {
  return ct.fm({idUser: this.id});
}


export default checklists;