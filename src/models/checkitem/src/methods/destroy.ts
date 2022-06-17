import Checkitem from "src/models/checkitem"


async function destroy(this: Checkitem) {
  await this.deattach()
  await this.remove()
}


export default destroy