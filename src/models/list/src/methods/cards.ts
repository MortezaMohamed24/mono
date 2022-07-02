import cd from "card/dist/crud.js"
import List from "../Model.js"
import Card from "card"


function cards(this: List): Promise<Card> {
  return cd.fm(this.idCards)
}


export {cards}
export default cards