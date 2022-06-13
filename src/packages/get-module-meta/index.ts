import url from "node:url"
import path from "node:path"


function getModuleMeta() {
  const url = import.meta.url
  const filename = path.join(url.fileURLToPath(import.meta.url), "../")
  const dirname = path.dirname(filename)

  return {
    url: url,
    dirname: dirname,
    filename: filename,
  }
}


export default getModuleMeta