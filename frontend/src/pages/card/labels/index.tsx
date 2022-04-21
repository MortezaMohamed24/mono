import s from "./style";
import cd from "/cards";
import ll from "/labels";
import React from "react";
import {Toggler} from "/components/popupify";
import DeepEquals from "/util/object/deepEquals";
import {useSelector} from "react-redux";
import {LabelNative} from "/labels/entity";
import {LABELER_POPUP_ID} from "/popups/cardLabeler";


const equals = DeepEquals<LabelNative[]>(1);


const Labels = React.memo(() => {
  const idCard = useSelector(cd.opened.id);
  const idLabels = useSelector(cd.opened.idLabels);
  const labels = useSelector(ll.many({id: idLabels}), equals);
  

  if (labels.length === 0) {
    return null;
  }


  return (
    <section className={s.labels}>

      {labels.map(({id, name, color}) => 
        <Toggler
          key={id} 
          action="toggle"
          zIndex={15}
          target={LABELER_POPUP_ID}
          payload={{idCard}}
          children={name}
          reference="this"
          className={s[color]}
        />
      )}

      <Toggler
        key="lastChild"
        action="toggle"
        zIndex={15}
        target={LABELER_POPUP_ID}
        payload={{idCard}}
        reference="this"
      />

    </section>
  );
});


export default Labels;