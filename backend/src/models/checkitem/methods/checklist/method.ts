import ct from "#models/checklist/crud";
import Checkitem from "#models/checkitem";


async function checklist(this: Checkitem) {
  const checklist = await ct.f(this.idChecklist);

  if (checklist) {
    return checklist;
  }

  throw new Error("checkitem: could not find owner checklist");
}

export default checklist;