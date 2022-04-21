import List from "#models/list";
import Projector from "./projectorType.js";
import Projection from "./projectionType.js";
import projectMany from "#models/util/projectMany";
import projectorDefault from "./projectorDefault.js";
import {ListDocumentJSONWithDescendants} from "#models/list/document";


async function project(this: List): Promise<ListDocumentJSONWithDescendants>;
async function project(this: List, {keys, cards, checklists, checkitems}: Projector): Promise<Projection>;
async function project(this: List, {keys, cards, checklists, checkitems}: Projector = projectorDefault): Promise<Projection> {
  const output: Projection = {};

  keys.includes("id") && (output.id = this.id);
  keys.includes("title") && (output.title = this.title);
  keys.includes("idUser") && (output.idUser = this.idUser);
  keys.includes("idBoard") && (output.idBoard = this.idBoard);
  keys.includes("isWatched") && (output.isWatched = this.isWatched);
  keys.includes("sortMethod") && (output.sortMethod = this.sortMethod);

  cards && (output.cards = await projectMany(await this.cards(), cards));
  checklists && (output.checklists = await projectMany(await this.checklists(), checklists));
  checkitems && (output.checkitems = await projectMany(await this.checkitems(), checkitems));
  
  return output;
}


export default project;