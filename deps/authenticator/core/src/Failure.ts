/** 
 * A method's failure to authenticate a request
*/
export type Failure = {
  status: number | undefined
  message: string | undefined
  challenge: string | undefined
}

export default Failure