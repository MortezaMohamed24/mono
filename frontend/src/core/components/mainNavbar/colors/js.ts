import {v4} from "uuid";


export type RED = typeof RED;
export type SKY = typeof SKY;
export type BLUE = typeof BLUE;
export type CYAN = typeof CYAN;
export type DARK = typeof DARK;
export type PINK = typeof PINK;
export type LIME = typeof LIME;
export type GREEN = typeof GREEN;
export type INDIGO = typeof INDIGO;
export type PURPLE = typeof PURPLE;
export type ORANGE = typeof ORANGE;

export const RED = Object.freeze({id: v4(), name: "red", value: "#a6001a"} as const);
export const SKY = Object.freeze({id: v4(), name: "sky", value: "#2d89ef"} as const);
export const BLUE = Object.freeze({id: v4(), name: "blue", value: "#00477e"} as const);
export const CYAN = Object.freeze({id: v4(), name: "cyan", value: "#187296"} as const);
export const DARK = Object.freeze({id: v4(), name: "dark", value: "#333333"} as const);
export const PINK = Object.freeze({id: v4(), name: "pink", value: "#c21460"} as const);
export const LIME = Object.freeze({id: v4(), name: "lime", value: "#66b032"} as const);
export const GREEN = Object.freeze({id: v4(), name: "green", value: "#004d33"} as const);
export const INDIGO = Object.freeze({id: v4(), name: "indigo", value: "#4424d6"} as const);
export const PURPLE = Object.freeze({id: v4(), name: "purple", value: "#8601af"} as const);
export const ORANGE = Object.freeze({id: v4(), name: "orange", value: "#e06000"} as const);

export type ALL = typeof ALL;
export type NAMES = typeof NAMES;
export type VALUES = typeof VALUES;

export const ALL = Object.freeze([RED, SKY, BLUE, CYAN, DARK, PINK, LIME, GREEN, INDIGO, PURPLE, ORANGE]);
export const NAMES = Object.freeze(ALL.map(color => color.name));
export const VALUES = Object.freeze(ALL.map(color => color.value));

export type Name = NAMES extends readonly (infer Element)[] ? Element : never;
export type Value = VALUES extends readonly (infer Element)[] ? Element : never;


export default ALL;