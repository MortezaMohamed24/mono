import Card from "src/models/card";
import Checklist from "src/models/checklist";


async function copyOwnChecklists(this: Card, targetCard: Card) {
  const copies: Checklist[] = [];

  for (let checklist of await this.checklists()) {
    copies.push(await checklist.copy({card: targetCard}));
  }

  return copies;
}


export default copyOwnChecklists;