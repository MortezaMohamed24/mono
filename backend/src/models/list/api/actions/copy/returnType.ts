import {LabelDocumentJSON} from "#models/label/document";
import {ListDocumentJSONWithDescendants} from "#models/list/document";


type ListCopyActionReturnType = Readonly<{
  /** The newly created copy list */
  copy: ListDocumentJSONWithDescendants;
  /** All the labels of `this.list`'s board */
  labels: LabelDocumentJSON[];
}>;


export default ListCopyActionReturnType;