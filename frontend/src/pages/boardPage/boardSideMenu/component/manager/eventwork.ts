import {v4} from "uuid";
import {HistoryEntry} from "./types";


export const OPEN = v4();
export const SHUT = v4();


export type OpenEvent = CustomEvent<HistoryEntry>;
export type ShutEvent = CustomEvent<null>;


export function on(type: "OPEN", listener: (event: OpenEvent) => void): void; 
export function on(type: "SHUT", listener: (event: ShutEvent) => void): void; 
export function on(type: "OPEN" | "SHUT", listener: (event: any) => void): void {
  switch (type) {
    case "OPEN": window.addEventListener(OPEN, listener); break;
    case "SHUT": window.addEventListener(SHUT, listener); break;
  }
}

export function off(type: "OPEN", listener: (event: OpenEvent) => void): void; 
export function off(type: "SHUT", listener: (event: ShutEvent) => void): void; 
export function off(type: "OPEN" | "SHUT", listener: (event: any) => void): void {
  switch (type) {
    case "OPEN": window.removeEventListener(OPEN, listener); break;
    case "SHUT": window.removeEventListener(SHUT, listener); break;
  }
}

export function dispatch(type: "SHUT"): void;
export function dispatch(type: "OPEN", entry: HistoryEntry): void; 
export function dispatch(type: "OPEN" | "SHUT", entry?: HistoryEntry): void {
  switch (type) {
    case "OPEN": window.dispatchEvent(new CustomEvent(OPEN, {detail: entry}));; break;
    case "SHUT": window.dispatchEvent(new CustomEvent(SHUT));; break;
  }
}


export default Object.freeze({OPEN, SHUT, on, off, dispatch});