import cm from "#models/checkitem/crud";
import List from "#models/list";


async function checkitems(this: List) {
  return cm.fm({idList: this.id});
}


export default checkitems;