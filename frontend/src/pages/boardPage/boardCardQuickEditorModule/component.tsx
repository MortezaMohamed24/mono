import s from "./style";
import cd from "/features/cards";
import React from "react";
import Labels from "../listCardLabels";
import Textarea from "/components/textarea/statefull";
import {Toggler} from "/components/popupify";
import ellipsify from "/util/string/ellipsify";
import CardBadges from "../listCardBadges";
import {useState} from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {TextareaMeta} from "/components/textarea/statefull";
import {MAX_TITLE_LENGTH} from "/features/cards/fields/constants";
import {MIN_TITLE_LENGTH} from "/features/cards/fields/constants";
import {LABELER_POPUP_ID} from "/components/cardLabelerPopup";
import {DELETER_POPUP_ID} from "/components/deleterPopup";
import {CARD_DATES_POPUP_ID} from "/components/cardDatesPopup";
import {CARD_MOVER_POPUP_ID} from "/components/cardMoverPopup";
import {CARD_COPIER_POPUP_ID} from "/components/cardCopierPopup";
import URLModulify from "/components/URLModulify";


interface Props {
  match: {
    params: {
      idCard: string;
    }
  }
}


const QuickCardEditorModule = URLModulify({
  path: "",
  exact: true,
  component: ({close, params: {idCard}}) => {
    const card = useSelector(idCard ? cd.one({id: idCard}) : () => undefined);
    const [title] = useState<TextareaMeta>({});
    const dispatch = useDispatch();
    const [titleIsValid, setTitleValidity] = useState(false);
  
  
    if (!idCard || !card) {
      return (
        <article className={s.error}>
          <p>Unexpected error occoured: Could not find target card</p>
          <p>Try reloading the page</p>
        </article>
      )
    }
  
  
    const setTitle = () => {
      if (title.value && titleIsValid) {
        dispatch(cd.edit({
          title: title.value,
          idCard: idCard, 
        }));
      }
    };
  
    const destroyCard = () => {
      dispatch(cd.destroy({idCard}));
    };
  
  
    useEffect(() => {
      if (card) {
        title.set?.(card.title || "Unkown card!");
        title.select?.();
      }
    }, []);
  
  
    return (
      <article className={s.wrapper}>
        <div>
  
          <section>
            <Textarea 
              min={MIN_TITLE_LENGTH}
              max={MAX_TITLE_LENGTH}
              meta={title}
              styled={true}
              oneLine={true}
              required={true}
              className={s.textarea}
              onValidity={setTitleValidity}
              placeholder="Enter new title..."
            />
  
            <CardBadges 
              idCard={idCard} 
            />
  
            <Labels 
              idCard={idCard} 
            />
          </section>
  
          <section>
            <ul>
              <li>
                <button>Open card</button>
              </li>
  
              <li>
                <Toggler 
                  action="toggle" 
                  target={LABELER_POPUP_ID} 
                  payload={{idCard}}
                  children="Edit labels"
                  reference="this"
                  zIndex={13}
                />
              </li>
              <li><button>Change cover</button></li>
              <li>
                <Toggler 
                  action="toggle" 
                  target={CARD_MOVER_POPUP_ID} 
                  payload={{idCard}}
                  children="Move"
                  reference="this"
                  zIndex={13}
                />
              </li>
              <li>          
                <Toggler 
                  action="toggle" 
                  target={CARD_COPIER_POPUP_ID} 
                  payload={{idCard}}
                  children="Copy"
                  reference="this"
                  zIndex={13}
                />
              </li>
              <li>
                <Toggler
                  action="toggle"
                  target={CARD_DATES_POPUP_ID}
                  payload={{idCard}}
                  children="Edit dates"
                  reference="this"
                  zIndex={13}
                />
              </li>
              <li>
                <Toggler
                  action="toggle"
                  target={DELETER_POPUP_ID}
                  payload={{
                    title: `Delete Card: ${ellipsify(card.title, 10)}`,
                    body: `Are you sure you want to delete card: ${card.title || "Untitled"}`,
                    commit: destroyCard,
                  }}
                  reference="this"
                  zIndex={13}
                  children="Delete"
                />
              </li>
            </ul>
          </section>
  
          <footer>
            <button type="button" onClick={setTitle} disabled={!titleIsValid}>
              Save
            </button>
  
            <button type="button" onClick={close}>
              Cancel
            </button> 
          </footer>
  
        </div>
      </article>
    );
  }
})


export default QuickCardEditorModule;