import Label from "#models/label";
import Projector from "./projectorType.js";
import Projection from "./projectionType.js";
import projectorDefault from "./projectorDefault.js";
import {LabelDocumentJSON} from "#models/label/document";


async function project(this: Label): Promise<LabelDocumentJSON>;
async function project(this: Label, {keys}: Projector): Promise<Projection>;
async function project(this: Label, {keys}: Projector = projectorDefault): Promise<LabelDocumentJSON | Projection> {
  const output: Projection = {};

  keys.includes("id") && (output.id = this.id);
  keys.includes("name") && (output.name = this.name);
  keys.includes("color") && (output.color = this.color);
  keys.includes("idUser") && (output.idUser = this.idUser);
  keys.includes("idBoard") && (output.idBoard = this.idBoard);

  return output;
}


export default project;