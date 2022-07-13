import fetch from "/util/fetch"
import {ApiBadRequestError} from "../errors.js"
import {ApiUnrecognizedError} from "../errors.js"
import {ApiUnauthorizedError} from "../errors.js"
import {ApiInternalServerError} from "../errors.js"


async function mutate(req: Request): Promise<undefined>
async function mutate<TBody>(req: Request, format: (body: unknown) => TBody): Promise<TBody>
async function mutate<TBody>(req: Request, format?: (body: unknown) => TBody): Promise<undefined | TBody> {
  const {
    ok,
    body,
    status,
  } = format
    ? await fetch(req, {timeout: 8000, body: "json"})
    : await fetch(req, {timeout: 8000})
  
  if (ok) {
    return format ? format(body) : undefined
  }

  switch (status) {
    case 400: throw new ApiBadRequestError()
    case 401: throw new ApiUnauthorizedError()
    case 500: throw new ApiInternalServerError()
  }

  throw new ApiUnrecognizedError()
}



export default mutate