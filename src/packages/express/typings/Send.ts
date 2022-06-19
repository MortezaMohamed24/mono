import {Response} from "./Response.js"

export type Send<ResBody = any, T = Response<ResBody>> = (body?: ResBody) => T