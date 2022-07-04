import Formatter from "../formatter";


type Options = {
  name?: undefined | string;
} 

const NULL = ({name}: Options = {}) => (
  Formatter<null, null>(() => null, {
    name: name || "Null", 
    typeNames: ["Null"],
  })
)


export default NULL;