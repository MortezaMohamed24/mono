import {Formatter} from "../formatter";
import FormatterFactory from "../formatter";


type Content = Formatter[]
type Options = {name?: string}


type ReturnType<TContent extends Content> = TContent[number]["value"][] 


const TUBLE = <TContent extends Content>(content: TContent, {name}: Options = {}) => (
  FormatterFactory<unknown[], ReturnType<TContent>>((unformatted) => {
    const copy: any[] = [];
    
    for (let [i, type] of content._()) {
      copy[i] = type(unformatted[i], {strict: true})
    }

    return copy;
  }, {
    name: name || "Tuble",
    typeNames: ["Array"],
  })
);


export default TUBLE;