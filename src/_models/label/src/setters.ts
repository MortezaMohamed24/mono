import types from "./fields/types.js"
import Label from "./Model.js"


export function name(this: Label, name: Label["name"]): Label["name"] {
  return types.name(name, {strict: true})
}

export function color(this: Label, color: Label["color"]): Label["color"] {
  return types.color(color, {strict: true}) as Label["color"]
}


export default Object.freeze({
  name, 
  color,
})