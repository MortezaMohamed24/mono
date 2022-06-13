import cm from "src/models/checkitem/crud";
import Checklist from "src/models/checklist";


async function destroy(this: Checklist) {
  await this.deattach();
  await cm.dm({idChecklist: this.id});
}


export default destroy;