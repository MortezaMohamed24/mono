import s from "../style";
import {ID} from "../state";
import state from "../state";
import React from "react";
import {useRef} from "react";
import {useMemo} from "react";
import {Payloads} from "../state";
import classNames from "classnames";
import {useEffect} from "react";
import {useSelector} from "/store";
import {useDispatch} from "/store";
import {PopupContext} from "../context";
import {useCustomPopper} from "./useCustomPopper";


type Props = {
  className?: string | undefined;
}

type Component<TID extends ID, TProps extends Props> = {
  (props: {
    id: TID;
    props: TProps;
    zIndex: number | undefined;
    payload: Payloads[TID]; 
    reference: undefined | string;
    backwardable: boolean;
  }): JSX.Element;
}

function popupify<TID extends ID, TProps extends Props>(id: TID, Component: Component<TID, TProps>) {
  return (props: TProps) => {
    const entry = useSelector(({popups}) => popups.history.find(id));
    const isOpen = Boolean(entry?.isOpen);
    const zIndex = entry?.zIndex ?? undefined; 
    const payload = entry?.payload; 
    const context = useRef<{id: TID}>({id});
    const dispatch = useDispatch();
    const reference = entry?.reference;
    const backwardable = Boolean(entry?.backwardable);
    const MemoizedComponent = useMemo(() => React.memo(Component), [Component]);
    
  
    const popper = useCustomPopper({zIndex, reference});
    const popup = popper.popup;

  
    function close() {
      dispatch(state.close({id}));
    }
  
    function onKeyDown(event: React.KeyboardEvent) {
      if (event.key === "Escape") {
        close();
        event.preventDefault();
        event.stopPropagation();
      }
    }
  
  
    useEffect(() => {
      if (isOpen) { 
        if (popup) {
          if (!popup.matches("*:focus-within")) {
            popup.focus(); 
          }
        }
      }
    }, [isOpen, popup]);
  
  
    return (
      <PopupContext.Provider value={context.current}>
        {isOpen ? (
          <article 
            {...popper.attributes}
            ref={popper.setPopup} 
            style={popper.styles}
            data-id={id} 
            tabIndex={0}
            children={
              <MemoizedComponent 
                id={id}
                props={props} 
                zIndex={zIndex}
                payload={payload as any}
                reference={reference}
                backwardable={backwardable}
              />
            }
            onKeyDown={onKeyDown}
            className={
              classNames(
                s.popup, 
                props.className, 
                {[s.backwardable]: backwardable},
              )
            }
          />
        ) : (
          null
        )}
      </PopupContext.Provider>
    );
  }
}


export {popupify};