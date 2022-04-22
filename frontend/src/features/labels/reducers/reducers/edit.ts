import v from "../../fields/formatters";
import {State} from "/store";
import {INVALID} from "/util/formatter";
import {LabelEditRequestMeta} from "/features/labels/actions";


function editLabel({ll}: State, meta: LabelEditRequestMeta) {
  const name = v.name(meta.name)
  const color = v.color(meta.color);
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