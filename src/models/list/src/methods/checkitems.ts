import cm from "src/models/checkitem/crud";
import List from "src/models/list";


async function checkitems(this: List) {
  return cm.fm({idList: this.id});
}


export default checkitems;