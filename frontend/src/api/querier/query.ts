import fetch from "/util/fetch";


async function query<TBody>(req: Request, format: (body: unknown) => TBody): Promise<TBody>{ 
  const {ok, body, status} = await fetch(req, {body: true});

  if (ok) {
    return format(body);
  }

  switch (status) {
    case 400: throw query.BAD_REQUEST_ERROR;
    case 401: throw query.UNAUTHORIZED_ERROR;
    case 500: throw query.INTERNAL_SERVER_ERROR;
  }

  throw query.UNRECOGNIZED_ERROR;
}

query.BODY_ERROR = fetch.BODY_ERROR;
query.CONNECTION_ERROR = fetch.CONNECTION_ERROR;
query.BAD_REQUEST_ERROR = Symbol("BAD_REQUEST_ERROR");
query.UNRECOGNIZED_ERROR = Symbol("UNRECOGNIZED_ERROR");
query.UNAUTHORIZED_ERROR = Symbol("UNAUTHORIZED_ERROR");
query.INTERNAL_SERVER_ERROR = Symbol("INTERNAL_SERVER_ERROR");


export default query;