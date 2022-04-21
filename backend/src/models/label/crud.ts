import crud from "#models/util/crud";
import Label from "#models/label/model";
import LabelMethods from "#models/label/methods/type";
import LabelVirtuals from "#models/label/virtuals/type";
import {LabelDocumentType} from "#models/label/document";


const ll = crud<LabelMethods, LabelVirtuals, LabelDocumentType>("label", Label);


export default ll;