import {on} from "./eventwork";
import React from "react";
import {off} from "./eventwork";
import {open} from "./actions";
import {shut} from "./actions";
import {toggle} from "./actions";
import {useRef} from "react";
import {backward} from "./actions";
import classNames from "classnames";
import {useState} from "react";
import {OpenEvent} from "./eventwork";
import {ShutEvent} from "./eventwork";
import {useEffect} from "react";
import useListener from "/util/hooks/useListener";
import WithHTMLAttributes from "/util/ts/withHTMLAttributes";


type Props = WithHTMLAttributes<HTMLButtonElement, {
  meta?: Meta;
  target?: symbol | undefined;
  /** defaults to `"TOGGLE"` */
  action?: "OPEN" | "SHUT" | "TOGGLE" | "BACKWARD";
  activeClass?: string | undefined | null;
}>

type Meta = {
  $?: null | Readonly<{
    node: HTMLButtonElement;
  }>
}


const Toggler = React.memo<Props>(({meta = {}, action, target, className, activeClass, ...rest}) => {
  const node = useRef<HTMLButtonElement | null>(null);
  /** Whether the tab whose id is `target` is currently opened */
  const [isActive, setIsActive] = useState<boolean>(false);


  const onOpen = useListener<OpenEvent>(({detail: {id}}) => {
    setIsActive(id === target);
  });

  const onShut = useListener<ShutEvent>(() => {
    setIsActive(false);
  });

  const onClick = useListener<MouseEvent>(() => {
    switch (action) {
      case "OPEN": open({id: target});
      case "SHUT": shut({id: target});
      case "TOGGLE": toggle({id: target});
      case "BACKWARD": backward();
    }
  });


  useEffect(() => {
    on("OPEN", onOpen);
    on("SHUT", onShut);
    node.current?.addEventListener("click", onClick);

    return () => {
      off("OPEN", onOpen);
      off("SHUT", onShut);
      node.current?.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    if (node.current) {
      meta.$ = {node: node.current};
    } else {
      meta.$ = null;
    }
  });


  return (
    <button 
      {...rest}
      type="button"
      className={classNames(className, activeClass ? {[activeClass]: activeClass && isActive} : undefined)}
    />
  );
});


export {
  Meta as Meta,
  Meta as TogglerMeta,
  Meta as MenuTogglerMeta,
  
  Toggler as default,
  Toggler as Toggler,
  Toggler as MenuToggler,
};