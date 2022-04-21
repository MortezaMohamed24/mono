import {CheckitemBase} from "./entity";


export type CheckitemProjector = {
  keys?: ReadonlyArray<keyof CheckitemBase>
}


export const checkitemNestedProjector: CheckitemProjector = Object.freeze({
  keys: ["id", "content", "isComplete"],
});

export const checkitemUnnestedProjector: CheckitemProjector = Object.freeze({
  keys: ["id", "content", "isComplete", "idChecklist"],
});


export const checkitemNestedProjectorJSON = JSON.stringify(checkitemNestedProjector);
export const checkitemUnnestedProjectorJSON = JSON.stringify(checkitemUnnestedProjector);


export default Object.freeze({
  rawNested: checkitemNestedProjector,
  rawUnnested: checkitemUnnestedProjector,
  rawNestedJSON: checkitemNestedProjectorJSON,
  rawUnnestedJSON: checkitemUnnestedProjectorJSON,
});