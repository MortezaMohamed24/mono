import Checkitem from "../Model.js"


async function destroy(this: Checkitem): Promise<void> {
  await this.deattach()
  await this.remove()
}


export default destroy