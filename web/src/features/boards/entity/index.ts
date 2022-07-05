export {BoardNative} from "./native";
export {BoardRawNested} from "./rawNested";
export {BoardRawUnnested} from "./rawUnnested";

import {formatAsBoardRawNested} from "./rawNested";
import {formatAsBoardRawUnnested} from "./rawUnnested";

export {formatAsBoardRawNested};
export {formatAsBoardRawUnnested};

export default Object.freeze({
  formatAsBoardRawNested,
  formatAsBoardRawUnnested,
});