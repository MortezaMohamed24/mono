import s from "./style";
import btn from "/style/button/style";           
import React from "react";


interface Props {
  error: string;
  retry: () => void;
}

const LoadError = ({error, retry}: Props) => (
  <section className={s.page}>

    <h2>
      {error}
    </h2>

    <button type="button" onClick={retry} className={`${btn.gray} ${btn.lg}`}>
      Retry
    </button> 

  </section>
)


export default LoadError;