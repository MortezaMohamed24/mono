import URL from "node:url"
import PATH from "node:path"


function getModuleMeta(moduleURL: string) {
  const filename = PATH.join(URL.fileURLToPath(moduleURL), "../")
  const dirname = PATH.dirname(filename)

  return {
    url: new URL.URL(moduleURL),
    dirname: dirname,
    filename: filename,
  }
}


export default getModuleMeta