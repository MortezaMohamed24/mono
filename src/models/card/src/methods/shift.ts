import oid from "oid"
import Card from "card"
import save from "save"


async function shift(this: Card, index = Infinity) {
  const list = await this.list()

  oid.move(list.idCards, this.id, index)

  await save(list)
}


export {shift}
export default shift