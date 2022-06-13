import ct from "src/models/checklist/crud";
import Card from "src/models/card";


function checklists(this: Card) {
  return ct.fm(this.idChecklists);
}


export default checklists;