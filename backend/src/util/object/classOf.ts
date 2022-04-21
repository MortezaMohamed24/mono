const {toString} = Object.prototype;


const classOf = (value: unknown) => (
  toString.call(value).slice(8, -1)
);


export default classOf;