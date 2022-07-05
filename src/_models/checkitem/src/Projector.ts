export interface CheckitemProjector {
  keys: readonly (
    | "id"
    | "idUser"
    | "idList"
    | "idCard"
    | "idBoard"
    | "content"
    | "isComplete"
    | "idChecklist"
  )[]
}


export default CheckitemProjector