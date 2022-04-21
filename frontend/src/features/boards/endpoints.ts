import {origin} from "/api/url";


export const LOAD = new URL("/api/board", origin).href;
export const EDIT = new URL("/api/boards/edit", origin).href;
export const COPY = new URL("/api/boards/copy", origin).href;
export const CREATE = new URL("/api/boards/create", origin).href;
export const DESTROY = new URL("/api/boards/destroy", origin).href;


export default Object.freeze({LOAD, EDIT, COPY, CREATE, DESTROY});