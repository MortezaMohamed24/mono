import Card from "../Model.js"


function updateDateLastView(this: Card) {
  this.dateLastView = Date.now()
}


export {updateDateLastView}
export default updateDateLastView