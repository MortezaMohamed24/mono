import idUtil from "/util/idUtil";
import {State} from "/store";
import {LabelRawUnnested} from "/labels/entity";


function addOneLabel({bd, ll}: State, label: LabelRawUnnested) {
  const board = bd.findOne({id: label.idBoard});

  if (board) {
    idUtil.add(board.idLabels, label.id);

    ll.addOne({
      id: label.id,
      name: label.name,
      color: label.color,
      idUser: board.idUser,
      idBoard: board.id,
    });
  }
}


export default addOneLabel;