import ct from "#models/checklist/crud";
import User from "#models/user";


function checklists(this: User) {
  return ct.fm({idUser: this.id});
}


export default checklists;