const BODY = OBJECT({
  title: title,
  idBoard: OID({}),
  keepCards: BOOLEAN({}).opt(true),
})

const ENDPOINT = ApiEndpoint({
  authorized: true,
  bodyCheckable: BODY,
  queryCheckable: undefined,
})


ENDPOINT.push(PopulateBoardByBody({
  boardKey: "board",
  idBoardKey: "idBoard",
}))

ENDPOINT.push(PopulateAuthorizedUser({
  userKey: "user",
}))


ENDPOINT.push(async ({set, get, body: {title, keepCards}}) => {
  const user = await getUser({id: body.idUser})
  const board = await getBoard({id: body.idBoard})


  const copy = await board.copy({
    user,
    title, 
    keepCards,
  })


  return await get().copy.project()
})