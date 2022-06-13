import cm from "src/models/checkitem/crud";
import Card from "src/models/card";


function checkitems(this: Card) {
  return cm.fm({idCard: this.id});
}


export default checkitems;