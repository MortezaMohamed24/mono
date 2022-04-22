import "./types";
import s from "./style";
import bd from "/features/boards";
import stop from "/util/event/stop";
import React from "react";
import classNames from "classnames";
import {ID} from "./constants";
import {useRef} from "react";
import {useState} from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import * as INPUT from "/components/input/statefull";
import * as COLORS from "/features/boards/colors";
import * as MODULIFY from "/components/modulify";
import * as CONSTANTS from "/features/boards/fields/constants";


const BoardCreator = MODULIFY.modulify(ID, ({id}) => {
  const title = useRef<INPUT.Meta>({}).current;
  const dispatch = useDispatch();
  const [theme, setTheme] = useState<COLORS.Name>(COLORS.BLUE.name);
  const [titleValidity, setTitleValidity] = useState<boolean>(false);
  

  function commit() {
    if (title.value && titleValidity) {
      dispatch(bd.create({title: title.value, theme: theme}));
      MODULIFY.close(id);
    }
  }

  function cancel() {
    MODULIFY.close(id);
  }

  function onOpen() {
    setTheme(COLORS.BLUE.name);
    title.set?.("New Board");
    title.select?.();
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      commit();
      stop(event);
    } else if (event.key === "Escape") {
      cancel();
      stop(event);
    }
  }


  useEffect(() => {
    onOpen();
  }, []);


  return (
    <div className={s.creator} onKeyDown={onKeyDown}>
      <header className={s[theme]}>
        <INPUT.Input
          min={CONSTANTS.MIN_TITLE_LENGTH}
          max={CONSTANTS.MAX_TITLE_LENGTH}
          type="text" 
          meta={title}
          required={true}
          onKeyDown={onKeyDown} 
          onValidity={setTitleValidity}
          placeholder="Add Board Title..." 
        />

        <button 
          type="button" 
          onClick={cancel} 
        />
      </header>
      
      <section>
        <ul>
          {COLORS.ALL.map(({name, id}) => 
            <li key={id}>
              <button 
                onClick={() => setTheme(name)}
                disabled={name === theme}
                className={classNames(s[name], {[s.selected]: name === theme})} 
              />
            </li>
          )}              
        </ul>
      </section>

      <footer>
        <button 
          type="button"
          onClick={commit} 
          children="Create" 
          disabled={!titleValidity || !theme} 
        />

        <button
          type="button"
          onClick={cancel}
          children="Cancel" 
        />
      </footer>

    </div>
  );
});


export default BoardCreator;