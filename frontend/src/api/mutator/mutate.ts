import fetch from "/util/fetch";


async function mutate(req: Request): Promise<undefined>;
async function mutate<TBody>(req: Request, format: (body: unknown) => TBody): Promise<TBody>;
async function mutate<TBody>(req: Request, format?: (body: unknown) => TBody): Promise<undefined | TBody> {
  const {
    ok,
    body,
    status,
  } = format
    ? await fetch(req, {body: true})
    : await fetch(req, {body: false})
  
  if (ok) {
    return format ? format(body) : undefined;
  }

  switch (status) {
    case 400: throw mutate.BAD_REQUEST_ERROR;
    case 401: throw mutate.UNAUTHORIZED_ERROR;
    case 500: throw mutate.INTERNAL_SERVER_ERROR;
  }

  throw mutate.UNRECOGNIZED_ERROR;
}

mutate.BODY_ERROR = fetch.BODY_ERROR;
mutate.CONNECTION_ERROR = fetch.CONNECTION_ERROR;
mutate.BAD_REQUEST_ERROR = Symbol("BAD_REQUEST_ERROR");
mutate.UNRECOGNIZED_ERROR = Symbol("UNRECOGNIZED_ERROR");
mutate.UNAUTHORIZED_ERROR = Symbol("UNAUTHORIZED_ERROR");
mutate.INTERNAL_SERVER_ERROR = Symbol("INTERNAL_SERVER_ERROR");


export default mutate;