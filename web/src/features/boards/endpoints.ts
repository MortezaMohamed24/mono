import {ORIGIN} from "../../api/url";


export const EDIT = new URL("/api/boards/edit", ORIGIN).href;
export const COPY = new URL("/api/boards/copy", ORIGIN).href;
export const LOAD = new URL("/api/board/project", ORIGIN).href;
export const CREATE = new URL("/api/boards/create", ORIGIN).href;
export const DESTROY = new URL("/api/boards/destroy", ORIGIN).href;


export default Object.freeze({LOAD, EDIT, COPY, CREATE, DESTROY});