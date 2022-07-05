import url from "url";
import path from "path";


export const FILENAME = path.join(url.fileURLToPath(import.meta.url), "../");
export const DIRNAME = path.dirname(FILENAME);


export default Object.freeze({FILENAME, DIRNAME});
