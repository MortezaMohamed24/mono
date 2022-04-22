import s from "./style";
import React from "react";
import Checkbox from "/components/checkbox/stateless";
import {useState} from "react";
import typeography from "/style/typeography/style";
import {useEffect} from "react";
import {CardNative} from "/features/cards/entity";


interface Props {
  readonly meta: Meta;
  /** The source card */
  readonly card: CardNative;
}

interface Meta {
  $?: Readonly<{
    /** whether to copy the source card's dates into the copy card */
    keepDates: boolean;
    /** whether to copy the source card's labels into the copy card */
    keepLabels: boolean;
    /** whether to copy the source card's checklists into the copy card */
    keepChecklists: boolean;
  }>
}


/**
 * Allows the user to choose, individually, whether to copy the source card's dates, 
 * labels, and checklists into the copy card.
*/
const Checkboxes = React.memo<Props>(({meta, card}) => {
  const dateDue = card.dateDue;
  const dateStart = card.dateStart;
  const idLabelsLength = card.idLabels.length;
  const idChecklistsLength = card.idChecklists.length;

  /** 
   * if source card has no dates, no labels, and no checklists, then this component
   * has no purpose and should not render. 
  */
  const mayRender = dateDue !== null || dateStart !== null || idLabelsLength > 0 || idChecklistsLength > 0;  

  const [keepDates, setKeepDates] = useState<boolean>(false);
  const [keepLabels, setKeepLabels] = useState<boolean>(false);
  const [keepChecklists, setKeepChecklists] = useState<boolean>(false);
  

  useEffect(() => {
    meta.$ = {keepDates, keepLabels, keepChecklists};
  });


  return mayRender ? (
    <section className={s.checkboxes}>
        <h3>Keep</h3>

        <div>
          {idLabelsLength === 0 ? null : (
            <div>
              <Checkbox 
                checked={keepLabels} 
                onChange={setKeepLabels} 
              />

              <p className={typeography.sm}>
                Labels ({idLabelsLength})
              </p>
            </div>
          )}
          
          {idChecklistsLength === 0 ? null : (
            <div>
              <Checkbox 
                checked={keepChecklists} 
                onChange={setKeepChecklists} 
              />

              <p className={typeography.sm}>
                Checklists ({idChecklistsLength})
              </p>
            </div>
          )}

        </div>
      </section>
    ) : null;
});


export {
  Meta as Meta,
  Meta as CheckboxesMeta,

  Props as Props,
  Props as CheckboxesProps,
  
  Checkboxes as default,
  Checkboxes as Checkboxes,
};