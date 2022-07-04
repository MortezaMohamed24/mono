import COPY from "./action.js"
import Config from "./config.js"
import User from "src/models/user"
import Board from "src/models/board"
import BodyType from "./bodyType.js"
import ReturnType from "./returnType.js"
import {Oid} from "oid"
import Board from "src/models/board"
import {OID} from "format"
import {title} from "src/models/board/fields/checkables"
import {OBJECT} from "format"
import {BOOLEAN} from "format"
import {PopulateBoardByBody} from "src/models/board/api/middlewares"
import {PopulateAuthorizedUser} from "src/models/user-api/middlewares"


export default bodyCheckable

interface BoardCopyRequestBody {
  /** The id of the board to copy. */
  readonly idBoard: Oid
  /** The title of the new board. Defaults to this board's title. */
  readonly title: Board["title"]
  /** Whether to copy own cards as well. */
  readonly keepCards?: boolean | undefined
}


export default BoardCopyRequestBody

interface BoardCopyActionConfig {
  body: BodyType
  query: undefined
  return: ReturnType
  locals: {
    /** The board to copy */
    board: Board
    /** The copy made of `this.board` */
    copy: Board
    /** The user that is meant to own `this.copy`. This is the user making the copy request. */
    user: User
  }
  authorized: true
}

const route = express

router.use(Format({
  source: "body",
  target: "payload",
  type: OBJECT({
    title: title,
    idBoard: OID({}),
    keepCards: BOOLEAN({}).opt(true),
  }),
})

COPY.push(PopulateBoardByBody<Config, "board", "idBoard">({
  boardKey: "board",
  idBoardKey: "idBoard",
}))


COPY.push(PopulateAuthorizedUser<Config, "user">({
  userKey: "user",
}))


COPY.push(async ({set, get, body: {title, keepCards}}) => {
  const {user, board} = get()


  const copy = await board.copy({
    user,
    title, 
    keepCards,
  })
  
  
  set({copy})
})


COPY.push(async ({get}) => {
  
  return await get().copy.project()
  
})