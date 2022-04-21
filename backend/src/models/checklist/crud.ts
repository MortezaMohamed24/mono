import crud from "#models/util/crud";
import Checklist from "#models/checklist/model";
import ChecklistMethods from "#models/checklist/methods/type";
import ChecklistVirtuals from "#models/checklist/virtuals/type";
import ChecklistDocumentType from "#models/checklist/document/documentType";


const ct = crud<ChecklistMethods, ChecklistVirtuals, ChecklistDocumentType>("Checklist", Checklist);


export default ct;