import cd from "#models/card/crud";
import ct from "#models/checklist/crud";
import cm from "#models/checkitem/crud";
import List from "#models/list";


async function destroy(this: List) {
  await this.deattach();
  await this.remove();
  await cd.dm({idList: this.id});
  await ct.dm({idList: this.id});
  await cm.dm({idList: this.id});
}


export default destroy;