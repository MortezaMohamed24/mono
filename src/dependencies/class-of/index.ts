const toString = Object.prototype.toString


function classOf(value: unknown) {
  return toString.call(value).slice(8, -1)
}


export {
  classOf as classOf,
  classOf as classof,
}

export default classOf