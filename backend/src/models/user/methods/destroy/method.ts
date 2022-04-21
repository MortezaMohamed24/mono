import cd from "#models/card/crud";
import lt from "#models/list/crud";
import bd from "#models/board/crud";
import ll from "#models/label/crud";
import cm from "#models/checkitem/crud";
import ct from "#models/checklist/crud";
import User from "#models/user";


async function destroy(this: User) {
  await this.remove();
  await bd.dm({idUser: this.id});
  await ll.dm({idUser: this.id});
  await lt.dm({idUser: this.id});
  await cd.dm({idUser: this.id});
  await ct.dm({idUser: this.id});
  await cm.dm({idUser: this.id});
}


export default destroy;