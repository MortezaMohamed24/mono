import list from "/features/lists/projector";
import label from "/features/labels/projector";
import {ListProjector} from "/features/lists/projector";
import {CardProjector} from "/features/cards/projector";
import {LabelProjector} from "/features/labels/projector";
import {ChecklistProjector} from "/features/checklists/projector";
import {CheckitemProjector} from "/features/checkitems/projector";


export interface BoardProjector {
  readonly keys: ReadonlyArray<"id" | "title" | "theme" | "idUser" | "idLists" | "idLabels" | "isStarred" | "dateCreation" | "dateLastView">;
  readonly lists?: ListProjector;
  readonly cards?: CardProjector;
  readonly labels?: LabelProjector;
  readonly checklists?: ChecklistProjector;
  readonly checkitems?: CheckitemProjector;
}


export const boardRawNestedProjector: BoardProjector = Object.freeze({
  keys: ["id", "title", "theme", "isStarred", "dateLastView", "dateCreation", "dateLastView"],
  lists: list.rawNested,
  labels: label.rawNested,
});

export const boardRawUnnestedProjector: BoardProjector = Object.freeze({
  keys: ["id", "title", "theme", "isStarred", "dateLastView", "dateCreation", "dateLastView"],
  lists: list.rawNested,
  labels: label.rawNested,
});


export const boardRawNestedProjectorJSON = JSON.stringify(boardRawNestedProjector);
export const boardRawUnnestedProjectorJSON = JSON.stringify(boardRawUnnestedProjector);


export default Object.freeze({
  rawNested: boardRawNestedProjector,
  rawUnnested: boardRawUnnestedProjector,
  rawNestedJSON: boardRawNestedProjectorJSON,
  rawUnnestedJSON: boardRawUnnestedProjectorJSON,
});