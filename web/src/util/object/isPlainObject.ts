import classOf from "./classOf";


const isPlainObject = (v: unknown) => (
  classOf(v) === "Object"
);


export default isPlainObject;