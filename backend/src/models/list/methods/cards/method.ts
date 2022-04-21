import cd from "#models/card/crud";
import List from "#models/list";


function cards(this: List) {
  return cd.fm(this.idCards);
}


export default cards;