import {OR} from "format"
import {Oid} from "oid"
import {OID} from "format"
import {OBJECT} from "format"
import {Router} from "src/packages/express/express"
import {content} from "checkitem/fields/checkables"
import {Authenticator} from "authenticator"
import {CheckitemDocumentJSON} from "checkitem/document"


type ReqBody = {
  /** The id for the checkitem to create */
  readonly id?: Oid | undefined;
  /** The checkitem's content. */
  readonly content: string;
  /** The id of the checklist for which to create a checkitem. */
  readonly idChecklist: Oid;
}

type ResBody  = (
  CheckitemDocumentJSON
)


const BODY = OBJECT({
  id: Or([OID({}), UNDEFINED({})]),
  content: content,
  idChecklist: OID({}),
})


const router = Router()


router.use(() => {
  // read body
})

router.use(() => {
  // format body
})

router.use()

router.use(() => {
  // populate realed document number 1 
})

router.use(PopulateChecklistByBody<Config, "checklist", "idChecklist">({
  checklistKey: "checklist",
  idChecklistKey: "idChecklist",
}))

router.use(async (request, response) => {
  const {id, checklist} = request.aka

  const checkitem = await Checkitem.make({
    id,
    content,
    checklist, 
  });

  request.aka.checkitem = checkitem
})

router.use((request, response) => {
  response.send(request.aka.checkitem)
})