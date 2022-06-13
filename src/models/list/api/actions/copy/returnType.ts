import {LabelDocumentJSON} from "src/models/label/document";
import {ListDocumentJSONWithDescendants} from "src/models/list/document";


type ListCopyActionReturnType = Readonly<{
  /** The newly created copy list */
  copy: ListDocumentJSONWithDescendants;
  /** All the labels of `this.list`'s board */
  labels: LabelDocumentJSON[];
}>;


export default ListCopyActionReturnType;