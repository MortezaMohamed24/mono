import s from "./style";
import React from "react";
import spinner from "/style/spinner/style";           


interface Props {
  body?: string | undefined;
}


const Loading = ({body = "Loading..."}: Props) => (
  <section className={s.page}>

    <h2>{body}</h2>

    <div className={spinner.red} />

  </section>
);


export default Loading;