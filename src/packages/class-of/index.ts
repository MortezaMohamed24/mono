const {toString} = Object.prototype


function classOf(value: unknown) {
  return toString.call(value).slice(8, -1)
}


export {classOf}
export default classOf