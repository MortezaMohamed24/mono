import URL from "node:url"
import PATH from "node:path"


export function URLToDirname(url: string) {
  return PATH.dirname(URL.fileURLToPath(url))
}


export default URLToDirname