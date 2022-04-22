import s from "./style";
import sp from "./state";
import Form from "./form";
import React from "react";
import Error from "./error";
import Loading from "../mainLoadingPage";
import {Errors} from "./state";
import {Redirect} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";


const SignUpPage = React.memo(() => {
  const error = useSelector(sp.error);
  const status = useSelector(sp.status);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(sp.clear()); 
    
    return () => {
      dispatch(sp.clear());
    };
  }, []);


  let content: JSX.Element;


  if (status === "idle") {
    content = <Form error={null} />;
  } else if (status === "loading") {
    content = <Loading />;
  } else if (status === "succeeded") {
    content = <Redirect to="/login" />;
  } else {
    if ((
      error === Errors.USERNAME
    ) || (
      error === Errors.PASSWORD
    ) || (
      error === Errors.LASTNAME
    ) || (
      error === Errors.FIRSTNAME
    ) || (
      error === Errors.UNAVAILABLE
    )) {
      content = <Form error={error} />;
    } else {
      content = <Error error={error as any} />;
    }
  }

  
  return (
    <main className={s.signup}>
      {content}
    </main>
  );
});


export default SignUpPage;