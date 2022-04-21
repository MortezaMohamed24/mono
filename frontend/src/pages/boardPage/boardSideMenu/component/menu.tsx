import s from "./style";
import {on} from "./manager";
import {off} from "./manager";
import React from "react";
import {MainTab} from "./tabs/main";
import classNames from "classnames";
import {OpenEvent} from "./manager";
import {ShutEvent} from "./manager";
import {useEffect} from "react";
import useListener from "/util/hooks/useListener";
import useMergedState from "/util/hooks/useMergedState";
import {HistoryEntry} from "./manager/types";


type State = {
  tab: null;
  isOpen: false;
} | {
  tab: HistoryEntry;
  isOpen: true;
}

const init= (): State => ({
  tab: null,
  isOpen: false,
});


const SideMenu = React.memo<{}>(() => {
  const [{tab, isOpen}, set] = useMergedState<State>(init);
  
  
  const onOpen = useListener<OpenEvent>(({detail}) => {
    set({tab: detail, isOpen: true});
  });

  const onShut = useListener<ShutEvent>(() => {
    set({tab: null, isOpen: false});
  });


  useEffect(() => {
    on("OPEN", onOpen);
    on("SHUT", onShut);

    return () => {
      off("OPEN", onOpen);
      off("SHUT", onShut);
    };
  }, []);


  return (
    <article className={classNames(s.menu, {[s.open]: isOpen})}>
      {
        isOpen 
          ? tab 
            ? <tab.Component backwardable={tab.backwardable} />
            : <MainTab backwardable={false} />
          : ""
      }
    </article>
  );
});


export default SideMenu;