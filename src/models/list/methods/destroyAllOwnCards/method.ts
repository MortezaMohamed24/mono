import cd from "src/models/card/crud";
import cm from "src/models/checkitem/crud";
import ct from "src/models/checklist/crud";
import List from "src/models/list";


async function destroyAllOwnCards(this: List) {
  this.idCards = [];
  await cd.dm({idList: this.id});
  await ct.dm({idList: this.id});
  await cm.dm({idList: this.id});
}


export default destroyAllOwnCards;