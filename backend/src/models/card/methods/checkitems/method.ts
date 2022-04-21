import cm from "#models/checkitem/crud";
import Card from "#models/card";


function checkitems(this: Card) {
  return cm.fm({idCard: this.id});
}


export default checkitems;