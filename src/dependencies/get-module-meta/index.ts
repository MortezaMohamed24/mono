import URL from "node:url"
import PATH from "node:path"


function getModuleMeta() {
  const url = import.meta.url
  const filename = PATH.join(URL.fileURLToPath(import.meta.url), "../")
  const dirname = PATH.dirname(filename)

  return {
    url: url,
    dirname: dirname,
    filename: filename,
  }
}


export default getModuleMeta