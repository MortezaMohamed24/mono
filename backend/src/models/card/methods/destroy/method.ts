import cm from "#models/checkitem/crud";
import ct from "#models/checklist/crud";
import Card from "#models/card";


async function destroy(this: Card) {
  await this.deattach();
  await this.remove();
  await ct.dm({idCard: this.id});
  await cm.dm({idCard: this.id});
}


export default destroy;