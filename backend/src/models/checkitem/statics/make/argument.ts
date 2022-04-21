import {Oid} from "#util/oid";
import Checkitem from "#models/checkitem";
import Checklist from "#models/checklist";


interface Argument {
  id?: Oid | undefined;
  content: Checkitem["content"];
  checklist: Checklist;
  isComplete?: Checkitem["isComplete"] | undefined;
}


export default Argument;