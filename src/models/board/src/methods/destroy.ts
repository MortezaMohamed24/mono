import ll from "src/models/card/crud"; 
import lt from "src/models/list/crud"; 
import cd from "src/models/label/crud"; 
import ct from "src/models/checklist/crud"; 
import cm from "src/models/checkitem/crud"; 
import Board from "src/models/board";


async function destroy(this: Board) {
  await this.deattach();
  await this.remove();
  await ll.dm({idBoard: this.id});
  await lt.dm({idBoard: this.id});
  await cd.dm({idBoard: this.id});
  await ct.dm({idBoard: this.id});
  await cm.dm({idBoard: this.id});
}


export default destroy;