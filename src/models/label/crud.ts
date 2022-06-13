import crud from "src/models/util/crud";
import Label from "src/models/label/model";
import LabelMethods from "src/models/label/methods/type";
import LabelVirtuals from "src/models/label/virtuals/type";
import {LabelDocumentType} from "src/models/label/document";


const ll = crud<LabelMethods, LabelVirtuals, LabelDocumentType>("label", Label);


export default ll;