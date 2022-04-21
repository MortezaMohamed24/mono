import s from "./style";
import type from "/style/typeography/style";
import React from "react";
import {Toggler} from "./manager";


const Header = ({title}: {title: string}) => (
  <header className={s.header}>
    <Toggler action="backward" className={s.backward} />
    <h2 className={`${s.title} ${type.para}`}>{title}</h2>
    <Toggler action="close" className={s.close} />
  </header>
);


export default Header;