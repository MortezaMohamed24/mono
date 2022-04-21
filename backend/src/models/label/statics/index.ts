import make from "./make/index.js";
import makeSet from "./makeSet/index.js";


type make = typeof make;
type makeSet = typeof makeSet;


export {make, makeSet};
export default Object.freeze({make, makeSet});