import {Request} from "express"
import {Response} from "express"
import {NextFunction} from "express"
import {EventEmitter} from "node:events"


interface __API_EVENTS__ {
  "dummy": {
    body: {
      title: "",
      theme: "",
    }
    query: {
      moon: ""
      sasha: ""
    }
    output: {
      theme: "",
    }
  }
}


type Events = (
  __API_EVENTS__
)

type EventType = (
  keyof Events
)

type On = {
  <TType extends EventType>(type: TType, callback: Callback<TType>): (
    | void 
    | Promise<void>
  )
}

type Callback<TType extends EventType> = {
  (event: Events[TType]): (
    | void
    | Events[TType]
    | Promise<void>
    | Promise<Events[TType]>
  )
}

type Init = {
  <TType extends EventType>(type: TType, initializer: Initializer<TType>): (
    | void 
    | Promise<void>
  )
}

type Initializer<TType extends EventType> = {
  (inbound: Request, outbound: Response, proceed: NextFunction): (
    | Events[TType]
    | Promise<Events[TType]>
  ) 
}



const api = new EventEmitter()

const on = api.on as any as On

function init<TType extends EventType>(type: TType, initializer: Initializer<TType>) {
  
}

init("dummy", (inbound, outbound, proceed) => {return {
    body: {
      theme: "",
      title: "",
    },
    query: {
      moon: "",
      sasha: "",
    },
    output: {
      theme: ""
    }
  }
})

on("dummy", ({body, query, output}) => {

  return {
    body: {
      theme: "",
      title: "",
    },
    query: {
      moon: "",
      sasha: "",
    },
    output: {
      theme: ""
    },
  }
})

on("")



// type EventType = (
//   keyof __API_EVENTS__
// )

interface

function m() {
  // section 1: read
  // section 2: write
  // section 3: return
  // section 4: dispatch
}

api.on("", () => {

})

api.action(type, (inbound, outbound, proceed) => {
  const body = format(inbound.body)
  const query = format(inbound.query)
  const user = inbound.user
  const list = await findList()
  const board = await findBoard()

  return {

  }
})