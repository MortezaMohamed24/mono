/**
  * When GET requesting a label from the server; a projector is sent along with
  * the url as a search query paramater. A projector specifies exactly which fields
  * of the label we wish to recieve.
 */ 
export interface LabelProjector {
  readonly keys?: ReadonlyArray<
    | "id"
    | "name"
    | "color"
    | "idUser"
    | "idBoard"  
  >;  
}


export const labelRawNestedProjector: LabelProjector = Object.freeze({
  keys: ["id", "name", "color"],
});

export const labelRawUnnestedProjector: LabelProjector = Object.freeze({
  keys: ["id", "name", "color", "idBoard"],
});


export const labelRawNestedProjectorJSON = JSON.stringify(labelRawNestedProjector);
export const labelRawUnnestedProjectorJSON = JSON.stringify(labelRawUnnestedProjector);


export default Object.freeze({
  rawNested: labelRawNestedProjector,
  rawUnnested: labelRawUnnestedProjector,
  rawNestedJSON: labelRawNestedProjectorJSON,
  rawUnnestedJSON: labelRawUnnestedProjectorJSON,
});