import {ListProjector} from "/lists/projector";
import {CardProjector} from "/cards/projector";
import {BoardProjector} from "/boards/projector";
import {LabelProjector} from "/labels/projector";
import {ChecklistProjector} from "/checklists/projector";
import {CheckitemProjector} from "/checkitems/projector";
import {boardRawNestedProjector} from "/boards/projector";


export interface UserProjector {
  readonly keys?: ReadonlyArray<
    | "id" 
    | "avatar" 
    | "idBoards" 
    | "username" 
    | "lastname" 
    | "initials" 
    | "firstname"
  >;
  readonly lists?: ListProjector;
  readonly cards?: CardProjector;
  readonly boards?: BoardProjector;
  readonly labels?: LabelProjector;
  readonly checklists?: ChecklistProjector;
  readonly checkitems?: CheckitemProjector;
}


export const userProjector: UserProjector = Object.freeze({
  keys: ["id", "avatar", "initials", "username", "lastname", "firstname"],
  boards: boardRawNestedProjector,
});


export const userProjectorJSON = JSON.stringify(userProjector);


export default Object.freeze({
  projector: userProjector,
  projectorJSON: userProjectorJSON,
});