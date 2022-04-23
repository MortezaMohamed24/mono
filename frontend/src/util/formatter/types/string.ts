import {escape} from "html-escaper";
import formatterify from "../formatterify";
import ErrorCreator from "../errorCreator";


type Configs = {
  type?: undefined | string;
  strict?: undefined | boolean;
  boolean?: undefined | boolean;
  optional?: undefined | boolean;
  fallback?: undefined | unknown;
}

type Options<TConfigs extends Configs> = TConfigs & {
  min?: undefined | number;
  max?: undefined | number;
  name?: undefined | string;
  trim?: undefined | "both" | "start" | "end";
  case?: undefined | "lower" | "upper" | "capital";
  error?: undefined | ErrorCreator;
  escape?: undefined | "html";
  length?: undefined | number;
  pattern?: undefined | RegExp;
  compact?: undefined | boolean | [RegExp, string];
}

function STRING<TConfigs extends Configs>(options: Options<TConfigs> = {} as Options<TConfigs>) {
  type Return = TConfigs["type"] extends string ? TConfigs["type"] : string;
  
  
  return formatterify<TConfigs, string, Return>({
    name: "String", 
    options: options, 
    typeNames: ["String"],
  },

  (unformatted) => {
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
      throw null;
    }

    return unformatted;
  });
}


export default STRING;