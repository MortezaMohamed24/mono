export {LabelBase} from "./base";
export {LabelNative} from "./native";
export {LabelRawNested} from "./rawNested";
export {LabelRawUnnested} from "./rawUnnested";

import {formatAsLabelRawNested} from "./rawNested";
import {formatAsLabelRawUnnested} from "./rawUnnested";

export {formatAsLabelRawNested};
export {formatAsLabelRawUnnested};

export default Object.freeze({
  formatAsLabelRawNested,
  formatAsLabelRawUnnested,
});