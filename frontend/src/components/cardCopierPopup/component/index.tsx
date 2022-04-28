import s from "./style";
import ps from "/components/popupify/style";
import cd from "/features/cards";
import btn from "/style/button/style";
import {ID} from "../constants";
import React from "react";
import popupify from "/components/popupify";
import {useState} from "react";
import Checkboxes from "./checkboxes";
import CopyLocater from "./locater";
import TitleField from "./titleField";
import {useDispatch} from "react-redux";
import {PopupHeader} from "/components/popupify";
import {PopupToggler} from "/components/popupify";
import {useSelector} from "react-redux";
import {TextareaMeta} from "/components/textarea/statefull";
import {CheckboxesMeta} from "./checkboxes";
import {CopyLocatorMeta} from "./locater";



/**
 * # Allows the user to copy a card with: 
 * 
 * - the ability to specify the destination
 * - the ability to specify whether or not to copy some details as well, 
 *   like: own dates, labels, and checklists.
 * 
 * ## Terminlogy
 * 
 * The `source card` is the card of which to create a copy.
 * 
 * The `copy card` is the copy created of the source card.
 * 
 * The `copy destination or copy location` "is at which index within which list within which 
 * board the copy card should be placed?". 
 * 
 * @param idCard the id of the source card
*/
const CardCopierPopup = popupify(ID, ({payload: {idCard}}) => {
  const card = useSelector(cd.one({id: idCard}));
  
  const [title] = useState<TextareaMeta>({});
  const [location] = useState<CopyLocatorMeta>({});
  const [checkboxes] = useState<CheckboxesMeta>({});
  
  const [titleValidity, setTitleValidity] = useState<boolean>(false);
  
  
  const dispatch = useDispatch();


  function commit() {
    if (title.value && location.$ && checkboxes.$ && titleValidity) {
      dispatch(cd.copy({ 
        title: title.value,
        index: location.$.index,
        idList: location.$.idList,
        idCard: idCard,
        keepDates: checkboxes.$.keepDates,
        keepLabels: checkboxes.$.keepLabels,
        keepChecklists: checkboxes.$.keepChecklists,
      }));
    }
  };


  return (
    <>
      <PopupHeader title="Copy card" />


        {card ? (
          <>
            <section className={`${s.body} ${ps.body}`}>
              <TitleField 
                meta={title}
                onValidity={setTitleValidity}
                sourceCardTitle={card.title}
              />

              <Checkboxes
                card={card}
                meta={checkboxes}
              />

              <CopyLocater 
                meta={location}
                idCard={card.id}
              />
            </section>

            <footer className={ps.footer}>
              <PopupToggler
                action="close"
                onClick={commit}
                children="Move"
                disabled={!(title.value && location.$ && checkboxes.$ && titleValidity)}
                className={`${btn.btn} ${btn.blue}`}
              />
            </footer>
          </>
        ) : (
          
          <p>
            Unexpected error occured.
            <br />
            You may try reloading the page.
          </p>

        )}
    </>
  );
});


export default CardCopierPopup;