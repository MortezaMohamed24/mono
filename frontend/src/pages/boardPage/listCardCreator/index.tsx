import s from "./style";
import cd from "/features/cards";
import btn from "/style/button/style";
import icon from "/style/icon/style";
import stop from "/util/event/stop";
import state from "./state";
import React from "react";
import Textarea from "/components/textarea/statefull";
import {useRef} from "react";
import {Toggler} from "/components/popupify";
import {useState} from "react";
import {useEffect} from "react";
import {useSelector} from "/store";
import {useDispatch} from "react-redux";
import {TextareaMeta} from "/components/textarea/statefull";
import {MAX_TITLE_LENGTH} from "/features/cards/fields/constants";
import {MIN_TITLE_LENGTH} from "/features/cards/fields/constants";
import BoardListCardLabels from "../listCardLabels";
import {CARD_CREATOR_OPTIONS_POPUP_ID} from "../listCardCreatorOptionsPopup";


interface Props {
  readonly index: number;
  readonly idList: string;
}


const BoardListCardCreator = React.memo<Props>(({idList, index}) => {
  const self = useRef<HTMLElement | null>(null);
  const [title] = useState<TextareaMeta>({});
  const dispatch = useDispatch();
  const idLabels = useSelector(state.idLabelsChecked) ?? [];
  const [titleIsValid, setTitleIsValid] = useState<boolean>(false);

  
  function commit() {
    if (title.value && titleIsValid) {
      dispatch(
        cd.create({
          title: title.value,
          index: index,
          idList: idList,
          idLabels: idLabels,
          description: null,
        })
      );
  
      title.set?.("New Card");
      title.select?.();

      scrollIntoView()
      dispatch(state.uncheck(idLabels));
    }
  }

  function cancel() {
    dispatch(state.close({idList}));
  }

  function onMount() {
    title.set?.("New Card");
    title.select?.();
    dispatch(state.check(idLabels));
  }

  function onUnmount() {
    title.set?.("");
  }

  function onKeyDown(event: React.KeyboardEvent) {
    switch (event.key) {
      case "Enter": commit(); stop(event); break;
      case "Escape": cancel(); stop(event); break;
    }
  }

  function scrollIntoView() {
    setTimeout(() => {
      self.current?.scrollIntoView();
    }, 200);
  }


  useEffect(() => {
    scrollIntoView();
  }, [index, idList]);

  useEffect(() => {
    onMount();
    return onUnmount;
  }, []);

  
  return (
    <article className={s.cardCreator} ref={self}>

      <header>
        <Textarea 
          min={MIN_TITLE_LENGTH}
          max={MAX_TITLE_LENGTH}
          meta={title} 
          styled={true}
          required={true}
          onKeyDown={onKeyDown}
          onValidity={setTitleIsValid}
          placeholder="Enter a title for this card..."
        />

        <BoardListCardLabels 
          idLabels={idLabels} 
        />
      </header>

      <footer>
        <button 
          type="button"
          onClick={commit}
          children="Create"
          disabled={!titleIsValid}
          className={btn.blue}
        />
  
        <button 
          type="button"
          onClick={cancel}
          className={icon.cancel}
        />

        <Toggler
          action="toggle"
          target={CARD_CREATOR_OPTIONS_POPUP_ID}
          reference="this"
          className={icon.options}
        />
      </footer>
    </article>
  );
});


export default BoardListCardCreator;