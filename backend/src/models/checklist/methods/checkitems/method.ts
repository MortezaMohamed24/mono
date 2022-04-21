import cm from "#models/checkitem/crud";
import Checklist from "#models/checklist";


function checkitems(this: Checklist) {
  return cm.fm(this.idCheckitems);
}


export default checkitems;