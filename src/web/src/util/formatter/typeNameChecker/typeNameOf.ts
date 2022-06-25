const toString = Object.prototype.toString;


const typeNameOf = (v: unknown) => (
  toString.call(v).slice(8, -1)
);


export default typeNameOf;