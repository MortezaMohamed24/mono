import Label from "#models/label";


async function destroy(this: Label) {
  await this.deattach();
  await this.remove();
}


export default destroy;