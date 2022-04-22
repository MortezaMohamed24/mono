import s from "./style";
import React from "react";
import {Toggler} from "./manager";
import typeography from "/style/typeography/style";


const Header = ({title}: {title: string}) => (
  <header className={s.header}>
    <Toggler action="backward" className={s.backward} />
    <h2 className={`${s.title} ${typeography.para}`}>{title}</h2>
    <Toggler action="close" className={s.close} />
  </header>
);


export default Header;