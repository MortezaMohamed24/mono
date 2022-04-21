import {LabelDocumentJSON} from "#models/label/document";
import {CardDocumentJSONWithDescendants} from "#models/card/document";


type CardMoveRequestReturnType = Readonly<{
  card: Readonly<CardDocumentJSONWithDescendants>;
  labels: ReadonlyArray<Readonly<LabelDocumentJSON>>; 
}>


export default CardMoveRequestReturnType;