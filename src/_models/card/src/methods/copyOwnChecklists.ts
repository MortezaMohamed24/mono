import Card from "../Model.js"
import Checklist from "checklist"


async function copyOwnChecklists(this: Card, targetCard: Card): Promise<Checklist[]> {
  const copies: Checklist[] = []

  for (let checklist of await this.checklists()) {
    copies.push(await checklist.copy({card: targetCard}))
  }

  return copies
}


export default copyOwnChecklists