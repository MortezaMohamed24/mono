import ll from "#models/card/crud"; 
import lt from "#models/list/crud"; 
import cd from "#models/label/crud"; 
import ct from "#models/checklist/crud"; 
import cm from "#models/checkitem/crud"; 
import Board from "#models/board";


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