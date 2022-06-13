export interface CheckitemProjector {
  keys: (
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


export default CheckitemProjector;