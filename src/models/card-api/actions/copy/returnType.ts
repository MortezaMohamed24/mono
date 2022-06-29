import {LabelDocumentJSON} from "src/models/label/document";
import {CardDocumentJSONWithDescendants} from "src/models/card/document";


type CardCopyActionReturnType = Readonly<{
  /** The copy card */
  card: Readonly<CardDocumentJSONWithDescendants>;
  /** The labels of the owner board of `this.card` */
  labels: ReadonlyArray<Readonly<LabelDocumentJSON>>;
}>


export default CardCopyActionReturnType;