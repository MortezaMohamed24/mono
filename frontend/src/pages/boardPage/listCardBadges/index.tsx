import s from "./style";
import cd from "/cards";
import cm from "/checkitems";
import badge from "/style/badge/style";
import React from "react";
import Dates from "./datesBadge";
import DeepEquals from "/util/object/deepEquals";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {CheckitemNative} from "/checkitems/entity";
import WithHTMLAttributes from "/util/ts/withHTMLAttributes";


type Props = WithHTMLAttributes<HTMLElement, {idCard: string}>


const equals = DeepEquals<CheckitemNative[]>(1);


const Badges = React.memo<Props>(({idCard, className, ...rest}) => {
  const card = useSelector(cd.one({id: idCard}));
  const cardAllOwnCheckitems = useSelector(cm.many({idCard}), equals);
  const cardAllOwnCheckitemsCount = cardAllOwnCheckitems.length;
  const cardCompleteOwnCheckitems = cardAllOwnCheckitems.filter(checkitem => checkitem.isComplete);
  const cardCompleteOwnCheckitemsCount = cardCompleteOwnCheckitems.length;
  const cardAllOwnCheckitemsAreComplete = cardAllOwnCheckitemsCount === cardCompleteOwnCheckitemsCount;


  if (!card) {
    return null;
  }


  const shouldDisplayDatesBadge = card.dateDue !== null && card.dateStart !== null;
  const shouldDisplayIsWatchedBadge = card.isWatched;
  const shouldDisplayCheckitemsBadge = cardAllOwnCheckitems.length > 0;
  const shouldDisplayIsCompleteBadge = card.isComplete;
  const shouldDisplayDescriptionBadge = card.description;


  if ((
    shouldDisplayDatesBadge
  ) || (
    shouldDisplayIsWatchedBadge
  ) || (
    shouldDisplayCheckitemsBadge
  ) || (
    shouldDisplayIsCompleteBadge
  ) || (
    shouldDisplayDescriptionBadge
  )) {
    return (
      <article {...rest} className={classNames(s.badges, className)}>
        {shouldDisplayDatesBadge ? (
          <Dates 
            dateDue={card.dateDue} 
            dateStart={card.dateStart} 
            isComplete={card.isComplete}
          />
        ) : (
          null
        )}

        {shouldDisplayDescriptionBadge ? (
          <span 
            key="description" 
            className={s.description} 
          />
        ) : (
          null
        )}

        {shouldDisplayCheckitemsBadge ? (
          <span 
            key="checkitems" 
            children={`${cardCompleteOwnCheckitemsCount}/${cardAllOwnCheckitemsCount}`} 
            className={classNames(s.checklists, {[badge.lime]: cardAllOwnCheckitemsAreComplete})} 
          />
        ) : (
          null
        )}

        {shouldDisplayIsWatchedBadge ? (
          <span 
            key="isWatched" 
            className={s.watched} 
          />
        ) : (
          null
        )}
      </article> 
    );
  }

  return null;
});


export default Badges;