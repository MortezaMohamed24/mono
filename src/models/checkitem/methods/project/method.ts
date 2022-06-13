import Checkitem from "src/models/checkitem";
import ProjectorType from "./projectorType.js";
import ProjectionType from "./projectionType.js";
import ProjectorDefault from "./projectorDefault.js";


async function project(this: Checkitem, {keys}: ProjectorType = ProjectorDefault) {
  const output: ProjectionType = {};

  keys.includes("id") && (output.id = this.id);
  keys.includes("idUser") && (output.idUser = this.idUser);
  keys.includes("idList") && (output.idList = this.idList);
  keys.includes("idCard") && (output.idCard = this.idCard);
  keys.includes("idBoard") && (output.idBoard = this.idBoard);
  keys.includes("content") && (output.content = this.content);
  keys.includes("isComplete") && (output.isComplete = this.isComplete);
  keys.includes("idChecklist") && (output.idChecklist = this.idChecklist);
  
  return output;
}


export default project;