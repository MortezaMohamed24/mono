import ct from "#models/checklist/crud";
import Card from "#models/card";


function checklists(this: Card) {
  return ct.fm(this.idChecklists);
}


export default checklists;