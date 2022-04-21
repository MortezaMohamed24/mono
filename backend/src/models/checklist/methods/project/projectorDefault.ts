import ChecklistProjectorType from "./projectorType.js";
import {checkitemProjectorDefault} from "#models/checkitem/methods/project";


const checklistProjectorDefault: ChecklistProjectorType = Object.freeze({
  keys: ["id", "title", "filter", "idUser", "idList", "idCard", "idBoard"],
  checkitems: checkitemProjectorDefault,
});


export default checklistProjectorDefault;