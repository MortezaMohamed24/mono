import cm from "src/models/checkitem/crud";
import Checklist from "src/models/checklist";


function checkitems(this: Checklist) {
  return cm.fm(this.idCheckitems);
}


export default checkitems;