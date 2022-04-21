import card from "/cards/projector";
import {CardProjector} from "/cards/projector";
import {ChecklistProjector} from "/checklists/projector";
import {CheckitemProjector} from "/checkitems/projector";


/**
* When GET requesting a list from the server; a projector is sent along with
* the url as a search query paramater. A projector specifies exactly which fields
* of the list we wish to recieve.
*/
export interface ListProjector {
  keys?: ReadonlyArray<
    | "id"
    | "title"
    | "idUser"
    | "idCards"
    | "idBoard"
    | "isWatched"
    | "sortMethod"
  >;
  cards?: CardProjector;
  checklists?: ChecklistProjector;
  checkitems?: CheckitemProjector;
}


export const listRawNestedProjector: ListProjector = Object.freeze({
  keys: ["id", "title", "isWatched", "sortMethod"],
  cards: card.rawNested,
});

export const listRawUnnestedProjector: ListProjector = Object.freeze({
  keys: ["id", "title", "idBoard", "isWatched", "sortMethod"],
  cards: card.rawNested,
});


export const listRawNestedProjectorJSON = JSON.stringify(listRawNestedProjector);
export const listRawUnnestedProjectorJSON = JSON.stringify(listRawUnnestedProjector);


export default Object.freeze({
  rawNested: listRawNestedProjector,
  rawUnnested: listRawUnnestedProjector,
  rawNestedJSON: listRawNestedProjectorJSON,
  rawUnnestedJSON: listRawUnnestedProjectorJSON,
})