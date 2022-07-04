export type GoRequest = {
  by: number;
  type: "go";
}

export type PushRequest = {
  url: string;
  type: "push";
}

export type GoBackRequest = {
  type: "goBack";
}

export type ReplaceRequest = {
  url: string;
  type: "replace";
}

export type GoForwardRequest = {
  type: "goForward";
}

export type AnyRequest = 
  | GoRequest
  | PushRequest
  | GoBackRequest
  | ReplaceRequest
  | GoForwardRequest