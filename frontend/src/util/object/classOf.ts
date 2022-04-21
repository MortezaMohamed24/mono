const toString = Object.prototype.toString;


const classOf = (v: unknown) => (
  toString.call(v).slice(8, -1)
);


export default classOf;