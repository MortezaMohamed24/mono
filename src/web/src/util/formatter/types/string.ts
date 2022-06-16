import {escape} from "html-escaper";
import Formatter from "../formatter";


type Options = {
  min?: undefined | number;
  max?: undefined | number;
  name?: undefined | string;
  trim?: undefined | "both" | "start" | "end";
  case?: undefined | "lower" | "upper" | "capital";
  escape?: undefined | "html";
  length?: undefined | number;
  pattern?: undefined | RegExp;
  compact?: undefined | boolean | [RegExp, string];
}

const STRING = <TFormatted extends string = string>(options: Options = {}) => (
  Formatter<string, TFormatted>((unformatted, {INVALID}) => {
    if (options.compact === true) {
      unformatted = unformatted.replace(/\s+/ug, " ");
    } else if (options.compact) {
      unformatted = unformatted.replace(options.compact[0], options.compact[1]);
    }

    if (options.trim === "both") {
      unformatted = unformatted.trim();
    } else if (options.trim === "start") {
      unformatted = unformatted.trimStart();
    } else if (options.trim === "end") {
      unformatted = unformatted.trimEnd();
    }

    if (options.case === "lower") {
      unformatted = unformatted.toLowerCase();
    } else if (options.case === "upper") {
      unformatted = unformatted.toUpperCase();
    } else if (options.case === "capital") {
      unformatted = unformatted[0].toUpperCase() + unformatted.slice(1).toLowerCase();
    }

    if (options.escape === "html") {
      unformatted = escape(unformatted);
    }
    
    if ((
      options.max !== undefined && unformatted.length > options.max
    ) || (
      options.min !== undefined && unformatted.length < options.min
    ) || (
      options.length !== undefined && unformatted.length !== options.length
    ) || (
      options.pattern !== undefined && !options.pattern.test(unformatted)
    )) {
      throw INVALID;
    }

    return unformatted as TFormatted;
  }, {
    name: options.name || "String", 
    typeNames: ["String"],
  })
);


export default STRING;