import {Formatter} from "../formatter";
import FormatterFactory from "../formatter";


type Options = {
  name?: string;
}

type Content = {
  [key: string]: Formatter;
  [key: symbol]: Formatter;
  [key: number]: Formatter;
}

type ReturnType<TContent extends Content> = {
  [Key in keyof TContent]: TContent[Key]["value"];
}


const OBJECT = <TContent extends Content>(content: TContent, {name}: Options = {}) => (
  FormatterFactory<TContent, ReturnType<TContent>>((unformatted) => {
    const copy: any = {};
  
    for (let [key, type] of Object.entries(content)) {
      copy[key] = type(unformatted[key], {strict: true});
    }

    return copy;
  }, {
    name: name || "Object",
    typeNames: ["Object"],
  })
);


export default OBJECT;