import cd from "src/models/card/crud";
import List from "src/models/list";


function cards(this: List) {
  return cd.fm(this.idCards);
}


export default cards;