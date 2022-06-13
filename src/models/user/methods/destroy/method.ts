import cd from "src/models/card/crud";
import lt from "src/models/list/crud";
import bd from "src/models/board/crud";
import ll from "src/models/label/crud";
import cm from "src/models/checkitem/crud";
import ct from "src/models/checklist/crud";
import User from "src/models/user";


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