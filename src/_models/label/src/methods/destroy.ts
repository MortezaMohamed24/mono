import Label from "label"


async function destroy(this: Label): Promise<void> {
  await this.deattach()
  await this.remove()
}


export {destroy}
export default destroy