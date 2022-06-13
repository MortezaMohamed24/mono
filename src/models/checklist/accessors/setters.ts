import v from "../fields/validators.js";
import Checklist from "../model/index.js";


const title = function(this: Checklist, title: Checklist["title"]): Checklist["title"] {
  return v.title(title);
};

const filter = function(this: Checklist, filter: Checklist["filter"]): Checklist["filter"] {
  return v.filter(filter);
};


export default Object.freeze({title, filter});