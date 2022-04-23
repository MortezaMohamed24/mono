import s from "./style";
import React from "react";
import classNames from "classnames";
import {useState} from "react";
import {useEffect} from "react";
import typeography from "/style/typeography/style";


interface Props {
  meta?: Meta | undefined;
  title: string;
  Heading: `h${1 | 2 | 3 | 4 | 5 | 6}` | "p";
  children: JSX.Element | JSX.Element[],
  className: string,
}

interface Meta {
  open?(): void;
  close?(): void;
  toggle?(): void;
}

const Accordion = React.memo(({meta = {}, title, Heading = "h2", children, className}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);


  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen(!isOpen);
  }


  useEffect(() => {
    meta.open = open;
    meta.close = close;
    meta.toggle = toggle;
  });


  return (
    <section className={classNames(className, s.accordion, {[s.open]: isOpen})}>

      <Heading className={typeography.h}>
        {title}
      </Heading>

      <button onClick={open} />

      <div>
        {children}
      </div>

    </section>
  );
});


export {
  Meta as Meta, 
  Meta as AccordionMeta, 
  Meta as ComponentMeta, 
  Accordion as default,
  Accordion as Accordion,
  Accordion as Component,
};