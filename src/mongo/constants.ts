import path from "path";
import {FILENAME} from "#constants/root";


export const BIN = "C:\\Program Files\\MongoDB\\Server\\5.0\\bin\\mongo.exe" as const;
export const PORT = 3001 as const;
export const DATA = path.join(FILENAME, "./data");
export const SERVER = `mongodb://localhost:${PORT}/data` as const;


export default Object.freeze({
  BIN,
  PORT,
  DATA,
  SERVER,
});