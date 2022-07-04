import {OID} from "format"
import {OBJECT} from "format"
import {Router} from "express"
import {CONTENT} from "checkitem/formats.js"
import {Checkitem} from "checkitem"


const router = Router()


router.use(express.json({
  type: "application/json",
}))

use(Payload({
  error: INVALID_PAYLOAD,
  source: "body",
  target: "payload",
  format: OBJECT({
    id: OID({optional: true}),
    content: CONTENT,
    idChecklist: OID(),
  }, {
    strict: true
  })
}))

router.use(PopulateChecklist({
  checklistKey: "checklist",
  idChecklistKey: "idChecklist",
}))

router.use(async ({payload}) => {
  payload.checkitem = await Checkitem.make({
    id: payload.id,
    content: payload.content,
    checklist: payload.checklist, 
  })
})

router.use(({payload}, response) => {
  response.send(payload.checkitem)
})

router.use(({data, payload}) => {
  sse.notify({
    type: "checkitem/created",
    data: data,
    payload: payload,
  })
})




function PopulateChecklist(...anys: any[]) {

}