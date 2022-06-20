import v from "src/models/label/fields/validators";
import Label from "src/models/label";


function name(this: Label, name: Label["name"]): Label["name"] {
  return v.name(name);
}

function color(this: Label, color: Label["color"]): Label["color"] {
  return v.color(color);
}


export default Object.freeze({name, color});