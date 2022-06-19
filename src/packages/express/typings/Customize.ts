import {O} from "ts-toolbelt"


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

type Step = [
  Customization,
  Customization,
  Customization,
]

type Customization = {
  request: object
  response: object
}

type CustomizeRequest<
  TCustomized0 extends object, 
  TCustomized1 extends object, 
  TCustomized2 extends object,
> = [
  SafeOmit<Required<TCustomized0>, keyof TCustomized2> & SafeOmit<Required<TCustomized1>, keyof TCustomized2> & Partial<TCustomized2>,
  SafeOmit<Required<TCustomized1>, keyof TCustomized2>,
  Partial<TCustomized2>,
]

type CustomizeResponse<
  TCustomized0 extends object, 
  TCustomized1 extends object, 
  TCustomized2 extends object,
> = [
  SafeOmit<Required<TCustomized0>, keyof TCustomized2> & SafeOmit<Required<TCustomized1>, keyof TCustomized2> & Partial<TCustomized2>,
  SafeOmit<Required<TCustomized1>, keyof TCustomized2>,
  Partial<TCustomized2>,
]

type Customize<TLastCustomizations extends Step, TNewCustomization extends Customization> = {
  request: CustomizeRequest<TLastCustomizations[1]["request"], TLastCustomizations[2]["request"], TNewCustomization["request"]>
  response: CustomizeResponse<TLastCustomizations[1]["response"], TLastCustomizations[2]["response"], TNewCustomization["response"]>
}


type Base = [
  {request: {}, response: {}},
  {request: {}, response: {}},
  {request: {}, response: {}},
]

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

function xx(request: Step0["request"][2], response: Step0["response"][0]) {
  request.body.board
}

type a = Step0["request"]["0"]
type b = Step0["request"]["1"]
type c = Step0["request"]["2"]

type d = Step0["response"]["0"]
type e = Step0["response"]["1"]
type f = Step0["response"]["2"]

const d: d = {
  
}
type Step1 = Customize<Step0, any>


export {}

type SafeOmit<TObject extends object, TKey extends string | number | symbol> = (
  Omit<TObject, TKey> extends never ? TObject : Omit<TObject, TKey> 
)


const nnn: SafeOmit<{title: "gjhgjhg"}, never> = {
  title: "gjhgjhg"
}