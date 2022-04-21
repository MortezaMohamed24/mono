import Type from "../type";
import {escape} from "html-escaper";


interface Options {
  readonly min?: number;
  readonly max?: number;
  readonly trim?: "both" | "start" | "end";
  readonly case?: "lower" | "upper" | "capital";
  readonly escape?: "html";
  readonly length?: number;
  readonly pattern?: RegExp;
  readonly compact?: boolean | [RegExp, string];
}

const STRING = Type<string, Options, string>({
  checker: (v, INVALID, o) => {
    if (o.compact === true) {
      v = v.replace(/\s+/ug, " ");
    } else if (o.compact) {
      v = v.replace(o.compact[0], o.compact[1]);
    }

    if (o.trim === "both") {
      v = v.trim();
    } else if (o.trim === "start") {
      v = v.trimStart();
    } else if (o.trim === "end") {
      v = v.trimEnd();
    }

    if (o.case === "lower") {
      v = v.toLowerCase();
    } else if (o.case === "upper") {
      v = v.toUpperCase();
    } else if (o.case === "capital") {
      v = v[0].toUpperCase() + v.slice(1).toLowerCase();
    }

    if (o.escape === "html") {
      v = escape(v);
    }
    
    if ((
      o.max !== undefined && v.length > o.max
    ) || (
      o.min !== undefined && v.length < o.min
    ) || (
      o.length !== undefined && v.length !== o.length
    ) || (
      o.pattern !== undefined && !o.pattern.test(v)
    )) {
      return INVALID;
    }

    return v;
  },

  typeName: ["String"],
});


export default STRING;