import {State} from "./Core.js"
import {Authority} from "./Authority.js"
import {STATE_KEY} from "./constants.js"
import {REQUEST_KEY} from "./constants.js"



// type Customization<TUser, TRequestKey extends Key, TSessionKey extends Key> = [
//   {
//     [TKey in TRequestKey]: {
//       user: TUser | null
//       failures: [] | null
//       authorized: boolean
//     }

//     session: {
//       [TKey in TSessionKey]?: {
//         user?: undefined | string
//       }
//     }
//   },
//   {}
// ]

// declare module "express-session" {
//   interface SessionData {
//     [STATE_KEY]: State
//   }
// }