import checklist from "/features/checklists/projector";
import {CheckitemProjector} from "/features/checkitems/projector";
import {ChecklistProjector} from "/features/checklists/projector";


/**
 * When GET requesting a card from the server; a projector is sent along with
 * the url as a search query paramater. A projector specifies exactly which fields
 * of the card we wish to recieve.
 */
export type CardProjector = {
  readonly keys: ReadonlyArray<
    | "id" 
    | "title" 
    | "idList" 
    | "idUser" 
    | "dateDue" 
    | "idBoard" 
    | "idLabels" 
    | "dateStart" 
    | "isWatched" 
    | "isComplete" 
    | "checklists" 
    | "description" 
    | "dateCreation" 
    | "idChecklists"
  >;
  readonly checklists?: ChecklistProjector;
  readonly checkitems?: CheckitemProjector;
}

export const cardRawNestedProjector: CardProjector = Object.freeze({
  keys: [
    "id", 
    "title", 
    "dateDue", 
    "idLabels", 
    "dateStart", 
    "isWatched", 
    "isComplete", 
    "description", 
    "dateCreation",
  ],
  checklists: checklist.rawNested,
});


export const cardRawUnnestedProjector: CardProjector = Object.freeze({
  keys: [
    "id", 
    "title", 
    "dateDue", 
    "idLabels", 
    "dateStart", 
    "isWatched", 
    "isComplete", 
    "description", 
    "dateCreation",
  ],
  checklists: checklist.rawNested,
});


export const cardRawNestedProjectorJSON = JSON.stringify(cardRawNestedProjector);
export const cardRawUnnestedProjectorJSON = JSON.stringify(cardRawUnnestedProjector);


export default Object.freeze({
  rawNested: cardRawNestedProjector,
  rawUnnested: cardRawUnnestedProjector,
  rawNestedJSON: cardRawNestedProjectorJSON,
  rawUnnestedJSON: cardRawUnnestedProjectorJSON,
});