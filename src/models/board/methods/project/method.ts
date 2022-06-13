import Board from "src/models/board";
import Projector from "./projectorType.js";
import Projection from "./projectionType.js";
import projectMany from "src/models/util/projectMany";
import projectorDefault from "./projectorDefault.js";
import {BoardDocumentJSONWithDescendants} from "src/models/board/document";


async function project(this: Board): Promise<BoardDocumentJSONWithDescendants>;
async function project(this: Board, {keys, lists, cards, labels, checklists, checkitems}: Projector): Promise<Projection>;
async function project(this: Board, {keys, lists, cards, labels, checklists, checkitems}: Projector = projectorDefault): Promise<BoardDocumentJSONWithDescendants | Projection> {
  const output: Projection = {};

  keys.includes("id") && (output.id = this.id);
  keys.includes("url") && (output.url = this.url);
  keys.includes("title") && (output.title = this.title);
  keys.includes("theme") && (output.theme = this.theme);
  keys.includes("idUser") && (output.idUser = this.idUser);
  keys.includes("isStarred") && (output.isStarred = this.isStarred);
  keys.includes("dateCreation") && (output.dateCreation = this.dateCreation);
  keys.includes("dateLastView") && (output.dateLastView = this.dateLastView);
  keys.includes("dateLastActivity") && (output.dateLastActivity = this.dateLastActivity);
  
  lists && (output.lists = await projectMany(await this.lists(), lists));
  cards && (output.cards = await projectMany(await this.cards(), cards));
  labels && (output.labels = await projectMany(await this.labels(), labels));
  checklists && (output.checklists = await projectMany(await this.checklists(), checklists));
  checkitems && (output.checkitems = await projectMany(await this.checkitems(), checkitems));

  return output;
}


export default project;