import s from "./style";
import ur from "/user";
import btn from "/style/button/style";
import type from "/style/typeography/style";
import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


function BoardNotFoundPage() {
  const user = useSelector(ur.user);


  if (user.$status !== "succeeded") {
    throw new Error(
      "<Avatar /> component could not render because the user state is not available"
    );
  }


  return (
    <div className={s.page}>

      <h2 className={type.h1}>
        Board not found.
      </h2>

      <p>
        {`Not ${user.firstname} ${user.lastname}? `}

        <Link to="/login" className={type.link}>
          Switch accounts
        </Link>
      </p>

      <Link to="/" className={btn.blue}>
        Home
      </Link>

    </div>
  );
}


export default BoardNotFoundPage;