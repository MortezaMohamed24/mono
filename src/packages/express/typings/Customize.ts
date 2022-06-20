import {O} from "ts-toolbelt"


type Step = {
  request: [object, object, object]
  response: [object, object, object]
}
/** 
 * This is just like `Omit<>`, but if `Tkey` is `never`, it returns `TObject` 
 * unmodified instead of returning `never`.
*/
type SafeOmit<TObject extends object, TKey extends string | number | symbol> = (
  Omit<TObject, TKey> extends never ? TObject : Omit<TObject, TKey> 
)

type D09<TObjectA extends object, TObjectB extends object> = (
  Omit<TObjectA, keyof TObjectB> extends never ? TObjectA : Omit<TObjectA, keyof TObjectB> 
)

type D01<T extends [object] | [object, object] | [object, object, object]> = (
  T extends [object]
    ? Partial<T[0]>
    : T extends [object, object]
      ? SafeOmit<Required<T[0]>, keyof T[1]>
      : T extends [object, object, object]
        ? SafeOmit<Required<T[0]>, keyof T[2]> & SafeOmit<Required<T[1]>, keyof T[2]> & Partial<T[2]>
        : never
)

type D02<T0 extends object, T1 extends object, T2 extends object> = [
  D01<[T0, T1, T2]>,
  D01<[T1, T2]>,
  D01<[T2]>,
]

type D03<T0 extends object, T1 extends object, T2 extends object> = (
  D04<D02<T0, T1, T2>>
)

type D04<T> = (
  // create a request whose body, query, params, and locals are what is specified in t
  // remove from T all fields whose keys exist in request
  // merge what remains of 
)

type Customization = {
  request: object
  response: object
}

type CustomizeRequest<
  TCustomized0 extends object, 
  TCustomized1 extends object, 
  TCustomized2 extends object,
> = (
  D02<TCustomized0, TCustomized1, TCustomized2>
)
  // D09<Required<TCustomized0>, TCustomized2> & D09<Required<TCustomized1>, TCustomized2> & Partial<TCustomized2>,
  // D09<Required<TCustomized1>, TCustomized2>,
  // Partial<TCustomized2>,


type CustomizeResponse<
  TCustomized0 extends object, 
  TCustomized1 extends object, 
  TCustomized2 extends object,
> = [
  D09<Required<TCustomized0>, TCustomized2> & D09<Required<TCustomized1>, TCustomized2> & Partial<TCustomized2>,
  D09<Required<TCustomized1>, TCustomized2>,
  Partial<TCustomized2>,
]

type Customize<TLastCustomizations extends Step, TNewCustomization extends Customization> = {
  request: CustomizeRequest<TLastCustomizations["request"][1], TLastCustomizations["request"][2], TNewCustomization["request"]>
  response: CustomizeResponse<TLastCustomizations["response"][1], TLastCustomizations["response"][2], TNewCustomization["response"]>
}













type Key = (
  | string 
  | symbol 
  | number
)

interface Request {
  a: "a"
  b: "x"
  c: ":"
}

interface Response {
  k: "v"
  y: "w"
  p: "e"
}


type Base = {
  request: [object, object, object]
  response: [object, object, object]
}

type Step0 = Customize<Base, {
  request: {
    body: {
      idList: string
      idBoard: string
      board: {
        title: string
        starred: boolean
      }
      list: {
        title: string
        cards: string[]
      }
    },
  },
  response: {}
}>

type Step1 = Customize<Step0, {
  request: {
    Title: ""
  },
  response: {}
}>


type a = Step0["request"]["0"]
type b = Step0["request"]["1"]
type c = Step0["request"]["2"]

type d = Step0["response"]["0"]
type e = Step0["response"]["1"]
type f = Step0["response"]["2"]

type a_ = Step1["request"]["0"]
type b_ = Step1["request"]["1"]
type c_ = Step1["request"]["2"]

type d_ = Step1["response"]["0"]
type e_ = Step1["response"]["1"]
type f_ = Step1["response"]["2"]


function xx(request: Step1["request"][0], response: Step0["response"][0]) {
  
}


export {}



const nnn: SafeOmit<{title: "gjhgjhg"}, never> = {
  title: "gjhgjhg"
}

interface Req {
  body: {id: string, starred: boolean}
  send(body: this["body"]): void
}

type Y = Omit<Req, "body"> & {body: "HACKED"}

const TT: Y = {
  body: "HACKED",
  send(boy) {

  }
}