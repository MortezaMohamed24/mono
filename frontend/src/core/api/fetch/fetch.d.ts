import Errors from "./errors";


type Options = {
  url: string | URL;
  timeOut?: undefined | number;
  headers?: Record<string, string> | Headers; 
  validateStatus?: (arg: ValidateStatusArgument) => void;
  formatResponseBody?: (body: unknown) => unknown;
} & ({
  body?: never;
  query?: string | object;
  method?: "GET" | "HEAD";
} | {
  body?: string | object;
  query?: string | object;
  method?: "POST" | "PATCH" | "DELETE";
})

type ValidateStatusArgument = {
  ok: boolean;
  body: unknown;
  status: number;
  statusText: string;
}

function Fetch<TOptions extends Options>(options: TOptions): ( 
  TOptions["formatResponseBody"] extends Function
    ? Promise<ReturnType<TOptions["formatResponseBody"]>>
    : Promise<undefined>
)


export default Fetch;