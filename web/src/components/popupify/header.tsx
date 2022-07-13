import s from "./style"
import React from "react"
import typeography from "/style/typeography/style"
import {PopupToggler} from "./toggler"


export const PopupHeader = ({title}: {title: string}) => (
  <header className={s.header}>
    <PopupToggler action="backward" className={s.backward} />
    <h2 className={`${s.title} ${typeography.para}`}>{title}</h2>
    <PopupToggler action="close" className={s.close} />
  </header>
)