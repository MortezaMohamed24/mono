import s from "./style";
import cd from "/cards";
import React from "react";
import pathOf from "/util/event/outerPathOf";
import ellipsify from "/util/string/ellipsify";
import CardBadges from "../listCardBadges";
import CardLabels from "../listCardLabels";

import {Link} from "react-router-dom";
import {Toggler} from "/components/modulify";
import {useState} from "react";
import {useSelector} from "react-redux";
import {QUICK_CARD_EDITOR_ID} from "../boardCardQuickEditor";


interface Props {
  idCard: string;
}


const Card = React.memo<Props>(({idCard}) => {
  const card = useSelector(cd.one({id: idCard}));
  const [toggler] = useState<{node?: HTMLButtonElement | null}>({});


  if (!card) {
    return null;
  }


  function stopClickEventOfLinkForToggler(event: React.MouseEvent) {
    if (toggler.node) {
      if (pathOf(event).includes(toggler.node)) {
        event.preventDefault();
      }
    }
  }


  return (
    <Link className={s.card} to={`/cards/${card.id}`} onClick={stopClickEventOfLinkForToggler}>

      <CardLabels 
        idCard={idCard}
        className={s.labels}
        preventDefault={true}
      /> 

      <h3 title={card.title} className={s.title}>
        {ellipsify(card.title || "Untitled", 140)}
      </h3> 

      <CardBadges 
        idCard={idCard} 
        className={s.badges}
      />

      <Toggler
        meta={toggler}
        action="open"
        // TODO:
        target={QUICK_CARD_EDITOR_ID as any}
        payload={idCard}
        className={s.edit}
        onClickCapture={e => e.preventDefault()}
      />

    </Link>
  );
});


export default Card;