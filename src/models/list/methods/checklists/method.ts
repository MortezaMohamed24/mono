import ct from "src/models/checklist/crud";
import List from "src/models/list";


function checklists(this: List) {
  return ct.fm({idList: this.id});
}


export default checklists;