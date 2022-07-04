import {Formatter} from "../formatter";
import FormatterFactory from "../formatter";


type Content = Formatter[];
type Options = {name?: undefined | string}


const ARRAY = <TContent extends Content>(content: TContent, {name}: Options = {} ) => (
  FormatterFactory<unknown[], TContent[number]["value"][]>((unformatted) => {
    const copy: unknown[] = [];
    
    for (let item of unformatted) {
      for (let type of content) {
        copy.push(type(item, {strict: true}));
      }
    }
    
    return copy;
  }, {
    name: name || "Array",
    typeNames: ["Array"],
  })
);


export default ARRAY;