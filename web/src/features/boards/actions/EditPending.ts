import {OID} from "/util/formatter"
import {ORIGIN} from "../../../api/url"
import {OBJECT} from "/util/formatter"
import {T} from "/features/boards/fields"
import {BoardNative} from "../entity"


type Meta = {
  readonly title?: undefined | string
  readonly theme?: undefined | BoardNative["theme"]
  readonly idBoard: string
  readonly isStarred?: undefined | boolean
}

type TYPE = (
  "boards/edit/pending"
)

const URL = (
  new window.URL("/api/boards/edit", ORIGIN).href
)

const TYPE = (
  "boards/edit/pending"
)

type Response = (
  undefined
)

const REQUEST = OBJECT({
  title: FIELDS.title.copy({optional: true}),
  theme: FIELDS.theme.copy({optional: true}),
  idBoard: OID(),
  isStarred: FIELDS.isStarred.copy({optional: true}),
}, {
  name: "BoardEditRequestMeta",
})

class Action {
  type: TYPE = TYPE
  meta: Meta


  constructor(initializer: any) {
    this.meta = initializer.meta
  }


  static Request(meta: Meta): Request {
    return new Request(URL, {
      body: JSON.stringify(meta),
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
    })
  }
}