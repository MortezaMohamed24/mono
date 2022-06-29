import Card from "src/models/card";


function updateDateLastView(this: Card) {
  this.dateLastView = Date.now();
}


export default updateDateLastView;