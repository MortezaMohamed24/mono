import S from "./style";
import CD from "/features/cards";
import LL from "/features/labels";
import React from "react";
import Label from "./label";
import classNames from "classnames";
import {useState} from "react";
import DeepEquals from "/util/object/deepEquals";
import {useSelector} from "react-redux";
import {LabelNative} from "/features/labels/entity";



type Props = ({
  /** The id of the card to display its labels */
  idCard: string;
  /** This option may not be defined if the `idCard` option is defined */
  idLabels?: undefined;
} | {
  /** This option may not be defined if the `idLabels` option is defined */
  idCard?: undefined;
  /** The ids of the labels to display */
  idLabels: string[];
}) & {
  /** 
   * Optional classname 
   */  
  className?: string | undefined;
  /** 
   * Whether to call `event.preventDefault()` in the capture 
   * phase when the component is clicked. defaults to `false`. 
   */
  preventDefault?: boolean;
}


const equal = DeepEquals<LabelNative[]>(1);


const BoardListCardLabelsByIdsOfLabels = React.memo<Props>(({idCard, idLabels, className, preventDefault = false}) => {
  const idLabelsByCard = useSelector(idCard ? CD.one.idLabels(idCard) : () => []);
  const idLabelsFinal = idLabelsByCard ?? idLabels ?? [];
  const finalLabels = useSelector(LL.many(idLabelsFinal), equal);
  
  
  const [isOpen, setIsOpen] = useState<boolean>(false);


  if (finalLabels.length === 0) {
    return null;
  }


  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const doPreventDefault = (event: React.MouseEvent) => {
    if (preventDefault) {
      event.preventDefault();
    }
  };


  return (
    <article onClick={toggleOpen} className={classNames(S.s, className, {[S.opened]: isOpen})} onClickCapture={doPreventDefault}>

      {finalLabels.map(({id, name, color}) => 
        <Label 
          key={id} 
          name={name}
          color={color}
        />
      )}

    </article>
  );
});


export default BoardListCardLabelsByIdsOfLabels;