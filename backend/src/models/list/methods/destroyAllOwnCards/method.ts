import cd from "#models/card/crud";
import cm from "#models/checkitem/crud";
import ct from "#models/checklist/crud";
import List from "#models/list";


async function destroyAllOwnCards(this: List) {
  this.idCards = [];
  await cd.dm({idList: this.id});
  await ct.dm({idList: this.id});
  await cm.dm({idList: this.id});
}


export default destroyAllOwnCards;