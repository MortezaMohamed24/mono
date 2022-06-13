import {LabelDocumentJSON} from "src/models/label/document";
import {ListDocumentJSONWithDescendants} from "src/models/list/document";


type ListMoveActionReturnType = Readonly<{
  /** The newly moved list */
  list: ListDocumentJSONWithDescendants;
  /** All the labels of `this.list`'s current owner board */
  labels: LabelDocumentJSON[];
}>


export default ListMoveActionReturnType;