import {State} from "/store";
import {INVALID} from "/util/formatter";
import formatters from "../../fields/formatters";
import {LabelEditRequestMeta} from "/features/labels/actions";


function editLabel({ll}: State, meta: LabelEditRequestMeta) {
  const name = formatters.name(meta.name, {strict: false});
  const color = formatters.color(meta.color, {strict: false});
  const label = ll.findOne({id: meta.idLabel});

  if (!label) { 
    return; 
  } if (name !== INVALID) { 
    label.name = name;
  } if (color !== INVALID) { 
    label.color = color;
  }
}


export default editLabel;