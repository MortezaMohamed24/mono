import cd from "card/dist/crud.js"
import User from "../Model.js"
import Card from "card"


function cards(this: User): Promise<Card[]> {
  return cd.fm({idUser: this.id})
}


export {cards}
export default cards