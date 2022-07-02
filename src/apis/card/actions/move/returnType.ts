import {LabelDocumentJSON} from "src/models/label/document";
import {CardDocumentJSONWithDescendants} from "src/models/card/document";


type CardMoveRequestReturnType = Readonly<{
  card: Readonly<CardDocumentJSONWithDescendants>;
  labels: ReadonlyArray<Readonly<LabelDocumentJSON>>; 
}>


export default CardMoveRequestReturnType;