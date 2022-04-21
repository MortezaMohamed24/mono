import ll from "#models/card/crud";
import Card from "#models/card";


async function labels(this: Card) {
  return ll.fm(this.idLabels);
}


export default labels;