import s from "./style";
import lg from "./state";
import Form from "./form";
import React from "react";
import Error from "./error";
import Loading from "../mainLoadingPage";
import {Errors} from "./state";
import {Redirect} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";


const Login = React.memo(() => {
  const error = useSelector(lg.error);
  const status = useSelector(lg.status);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(lg.clear()); 
    
    return () => {
      dispatch(lg.clear());
    };
  }, []);



  let content: JSX.Element;


  if (status === "idle") {
    content = <Form />;
  } else if (status === "loading") {
    content = <Loading />;
  } else if (status === "succeeded") {
    content = <Redirect to="/" />;
  } else {
    content = <Error error={error as Errors} />;
  }

  return (
    <article className={s.login}>
      {content}
    </article>
  );
});


export default Login;