import ll from "/lists";
import ps from "/components/popupify/style";
import btn from "/style/button/style";
import {ID} from "./constants";
import stop from "/util/event/stop";
import React from "react";
import Input from "/components/input/statefull";
import idAttr from "/util/dom/idAttr";
import {close} from "/components/popupify";
import {Header} from "/components/popupify";
import {popupify} from "/components/popupify";
import {useState} from "react";
import {InputMeta} from "/components/input/statefull";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {MAX_TITLE_LENGTH} from "/lists/fields/constants";
import {MIN_TITLE_LENGTH} from "/lists/fields/constants";


const BoardListCopierPopup = popupify(ID, ({payload: {idList}}) => {
  const list = useSelector(ll.one({id: idList}));
  const [input] = useState<InputMeta>({});
  const dispatch = useDispatch(); 
  const [inputId] = useState(idAttr);
  const [titleIsValid, setIsTitleValid] = useState(false);


  function commit() {
    if (list && input.value && titleIsValid) {
      dispatch(ll.copy({ 
        title: input.value, 
        idList: list.id, 
        idBoard: list.idBoard,
      }));

      close(ID);
    }
  }

  function onOpen() {
    input.set?.(list?.title || "Unkown list!");
    input.select?.();
  }

  function onKeyDownOfInput(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      commit();
      stop(event);
    }
  }


  useEffect(() => {
    onOpen();
  }, []);

 
  return (
    <>
      <Header title="Copy List" />

      <section className={ps.body}>

        <h3>
          <label htmlFor={inputId}>
            New list's title
          </label>
        </h3>

        <Input
          id={inputId}
          min={MIN_TITLE_LENGTH}
          max={MAX_TITLE_LENGTH}
          meta={input}
          styled={true}
          disabled={!list}
          required={true}
          onKeyDown={onKeyDownOfInput}
          onValidity={setIsTitleValid}
          placeholder="Enter title..."
        />

      </section>

      <footer className={ps.footer}>
        <button
          type="button" 
          onClick={commit}
          children="Copy"
          disabled={!list || !titleIsValid || !input.value}
          className={btn.blue}
        />
      </footer>
    </>
  );
});


export default BoardListCopierPopup;