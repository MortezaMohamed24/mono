import Card from "#models/card";


function updateDateLastView(this: Card) {
  this.dateLastView = Date.now();
}


export default updateDateLastView;