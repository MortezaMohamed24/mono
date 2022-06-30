type Obj = (
  Record<any, unknown>
)

/** 
 * Returns `true` if all `obj`'s properties are `undefined`, otherwise, `false`
*/
function isEmpty(obj: Obj) {
  for (let key in obj) {
    if (obj[key] !== undefined) {
      return false
    }
  }

  return true
}


export {isEmpty}
export default {isEmpty}