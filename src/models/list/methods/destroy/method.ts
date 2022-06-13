import cd from "src/models/card/crud";
import ct from "src/models/checklist/crud";
import cm from "src/models/checkitem/crud";
import List from "src/models/list";


async function destroy(this: List) {
  await this.deattach();
  await this.remove();
  await cd.dm({idList: this.id});
  await ct.dm({idList: this.id});
  await cm.dm({idList: this.id});
}


export default destroy;