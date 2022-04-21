import s from "./style";
import btn from "/style/button/style";
import type from "/style/typeography/style";
import React from "react";
import {Link} from "react-router-dom";


const PageNotFound = React.memo<{}>(() => (
  <div className={s.page}>
    <h2 className={type.h2}>Page not found!</h2>
    <Link to="/" className={btn.gray}>Home</Link>
  </div>
));


export default PageNotFound;