import cd from "card/crud.js"
import Card from "card"
import Board from "../Model.js"


function cards(this: Board): Promise<Card[]> {
  return cd.fm({idBoard: this.id})
}


export {cards}
export default cards