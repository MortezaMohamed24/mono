const toString = Object.prototype.toString


export function classOf(value: unknown) {
  return toString.call(value).slice(8, -1)
}


export default classOf