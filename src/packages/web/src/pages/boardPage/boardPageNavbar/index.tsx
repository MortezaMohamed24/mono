import s from "./style";
import bd from "/features/boards";
import React from "react";
import {Toggler} from "../boardSideMenu";
import classNames from "classnames";
import TwoModeInput from "/components/twoFacedInput";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {MIN_TITLE_LENGTH} from "/features/boards/fields/constants";
import {MAX_TITLE_LENGTH} from "/features/boards/fields/constants";


const BoardNavbar = React.memo<{}>(() => {
  const title = useSelector(bd.opened.title);
  const idBoard = useSelector(bd.opened.id);
  const dispatch = useDispatch();
  const isStarred = useSelector(bd.opened.isStarred)


  function updateTitle(newTitle: string) {
    dispatch(bd.edit({idBoard: idBoard, title: newTitle}));
  }

  function toggleStar() {
    dispatch(bd.edit({idBoard: idBoard, isStarred: !isStarred}));
  }


  return (
    <section className={s.navbar}>
      <TwoModeInput 
        value={title || "Unknown"} 
        onChange={updateTitle}
        viewClass={s.view}
        inputClass={s.input}
        inputProps={{min: MIN_TITLE_LENGTH, max: MAX_TITLE_LENGTH, required: true}}
      />

      <button 
        type="button" 
        onClick={toggleStar}
        className={classNames(s.star, {[s.starred]: isStarred})} 
      />

      <Toggler className={s.menu} activeClass={s.active}>
        <span>Show Menu</span>
        <span>Hide Menu</span>
      </Toggler>
    </section>
  );
});


export default BoardNavbar;