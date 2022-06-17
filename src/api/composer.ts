import {Request} from "express"
import {Response} from "express"
import {NextFunction} from "express"


const endpoints: any = [

]


function Endpoint(options: any) {
  const callbacks: any[] = []


  const on = (...callbacks: any[]) => {
    callbacks.push(...callbacks)
  }

  const compose = async (inbound: Request, outbound: Response, proceed: Function) => {
    const body = options.formatBody(inbound.body)
    const body = options.formatBody(inbound.body)
    let argument = {inbound, outbound, proceed}

    for (let callback of callbacks) {
      argument = await callback(argument)
    }

    return argument
  }


  return [on, compose]
}


const on = Endpoint({
  authorized: true,
  // formatBody: STRING(),
  // formatQuery: STRING(),
})


on(
  ({body, query, idUser, inbound, outbound, proceed}) => {
    // handle action
  },

  (options) => {
    // responde
  },

  () => {
    // notify
  },
)