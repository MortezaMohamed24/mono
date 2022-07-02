import Board from "../Model.js"


export function updateDateLastView(this: Board): void {
  this.dateLastView = Date.now()
}


export default updateDateLastView