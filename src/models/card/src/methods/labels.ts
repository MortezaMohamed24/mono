import ll from "src/models/card/crud";
import Card from "src/models/card";


async function labels(this: Card) {
  return ll.fm(this.idLabels);
}


export default labels;