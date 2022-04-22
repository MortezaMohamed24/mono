import checkitem from "/features/checkitems/projector";
import {CheckitemProjector} from "/features/checkitems/projector";


/**
 * When GET requesting a checklist from the server, a projector is sent along with
 * the url as a search query paramater. A projector specifies exactly which fields
 * of the checklist we wish to recieve.
 */
export interface ChecklistProjector {
  readonly keys?: ReadonlyArray<
    | "id"
    | "title"
    | "filter"
    | "idUser"
    | "idList"
    | "idCard"
    | "idBoard"
    | "checkitems"
    | "idCheckitems"
  >;
  readonly checkitems?: CheckitemProjector;
}


export const checklistRawNestedProjector: ChecklistProjector = Object.freeze({
  keys: ["id", "title", "filter"],
  checkitems: checkitem.rawNested,
});

export const checklistRawUnnestedProjector: ChecklistProjector = Object.freeze({
  keys: ["id", "title", "filter", "idCard"],
  checkitems: checkitem.rawNested,
});

export const checklistRawNestedProjectorJSON = JSON.stringify(checklistRawNestedProjector);
export const checklistRawUnnestedProjectorJSON = JSON.stringify(checklistRawUnnestedProjector);


export default Object.freeze({
  rawNested: checklistRawNestedProjector,
  rawUnnested: checklistRawUnnestedProjector,
  rawNestedJSON: checklistRawNestedProjectorJSON,
  rawUnnestedJSON: checklistRawUnnestedProjectorJSON,
})