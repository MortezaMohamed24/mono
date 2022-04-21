import ct from "#models/checklist/crud";
import List from "#models/list";


function checklists(this: List) {
  return ct.fm({idList: this.id});
}


export default checklists;