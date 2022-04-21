import Checklist from "#models/checklist";
import Projector from "./projectorType.js";
import Projection from "./projectionType.js";
import projectMany from "#models/util/projectMany";
import projectorDefault from "./projectorDefault.js";
import {ChecklistDocumentJSONWithDescendants} from "#models/checklist/document";


async function project(this: Checklist): Promise<ChecklistDocumentJSONWithDescendants>;
async function project(this: Checklist, {keys, checkitems}: Projector): Promise<Projection>;
async function project(this: Checklist, {keys, checkitems}: Projector = projectorDefault): Promise<Projection> {
  const output: Projection = {};

  keys.includes("id") && (output.id = this.id);
  keys.includes("title") && (output.title = this.title);
  keys.includes("filter") && (output.filter = this.filter);
  keys.includes("idUser") && (output.idUser = this.idUser);
  keys.includes("idList") && (output.idList = this.idList);
  keys.includes("idCard") && (output.idCard = this.idCard);
  keys.includes("idBoard") && (output.idBoard = this.idBoard);

  checkitems && (output.checkitems = await projectMany(await this.checkitems(), checkitems));

  return output;
}


export default project;