import URL from "node:url"


export function URLToFilename(url: string) {
  return URL.fileURLToPath(url)
}


export default URLToFilename