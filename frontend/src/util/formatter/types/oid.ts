import Formatter from "../formatter";


type Options = {
  name?: undefined | string;
}

/** Matches an Object Id's hex string representation */
const PATTERN = /^[0-9a-fA-F]{24}$/;


const OID = ({name}: Options = {}) => (
  Formatter<string, string>((unformatted) => {
    unformatted = unformatted.trim().toLowerCase();

    if (PATTERN.test(unformatted)) {
      return unformatted;
    } 
    
    throw null;
  }, {
    name: name || "Oid",
    typeNames: ["String"],
  })
)


export default OID;