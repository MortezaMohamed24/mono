import {Formatter} from "../../formatter";


const defaultOptions = Object.freeze({
  min: 0,
  max: Infinity,
  name: "Array",
  length: "any",
  content: [] as Formatter[],
  typeNames: ["Array"],
});


export default defaultOptions;