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



const router = Router()


router.use(initialize({
  kRequest: "AUTH",
  kSession: "AUTH",
}))

router.use(authenticate({
  kRequest: "AUTH",
  kSession: "AUTH",
}))

router.use(Body({
  type: "application/json"
}))

router.use(Payload(OBJECT({
  id: Or([OID({}), UNDEFINED({})]),
  content: content,
  idChecklist: OID({}),
})))

router.use(PopulateChecklist({
  checklistKey: "checklist",
  idChecklistKey: "idChecklist",
}))

router.use(async (request, response) => {
  const {id, checklist} = request.payload


  const checkitem = await Checkitem.make({
    id,
    content,
    checklist, 
  });


  request.data.checkitem = checkitem
})

router.use(({payload}, response) => {

  response.send(payload.checkitem)

})

router.use(({data, payload}, response) => {

  sse.notify({
    type: "checkitem/created",
    data: data,
    payload: payload,
  })

})