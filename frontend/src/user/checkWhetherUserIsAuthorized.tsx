import React from "react";
import Loading from "/pages/mainLoadingPage";
import LoadError from "../pages/loadErrorPage";
import {useState} from "react";
import {Redirect} from "react-router-dom";
import {useEffect} from "react";
import LoadUserData from "./loadUserData";
import isAuthorized from "/api/isAuthorized";


type State = {
  error: null;
  status: "idle" | "loading";
  authorized: boolean | null;
} | {
  error: null;
  status: "succeded";
  authorized: boolean;
} | {
  error: string;
  status: "failed";
  authorized: boolean | null;
}


const init = (): State => ({
  error: null, 
  status: "idle", 
  authorized: null,
});


const getMessageForError = (error: unknown) => {
  switch (error) {
    case isAuthorized.CONNECTION_ERROR:
      return "Couldn't Connect To The Server, Check Your Connection And Proxy Settings Or Try Again Later";
    default: 
      return "An Unexpected Error Occoured. \nTry reloading the page."; 
  }
};

const CheckWhetherUserIsAuthorized = () => {
  const [{error, status, authorized}, setState] = useState<State>(init);

  console.log({error, status, authorized})

  async function checkAuthority() {
    console.log({error, status, authorized})
    if (status !== "loading") {
      setState({
        error: null, 
        status: "loading", 
        authorized: null,
      });

      try {
        setState({
          error: null, 
          status: "succeded", 
          authorized: await isAuthorized(),
        });
      } 
      
      catch (e) {
        setState({
          error: getMessageForError(e), 
          status: "failed", 
          authorized: null,
        });
      }
    }
  }


  useEffect(() => {
    checkAuthority();
  }, []);


  if ((
    status === "idle"
  ) || (
    status === "loading"
  )) {
    return <Loading />;
  } else if (status === "failed") {
    return <LoadError error={error as string} retry={checkAuthority} />; 
  } else if (authorized) {
    return <LoadUserData />;
  } else {
    return <Redirect to="/login" />;
  }
};


export default CheckWhetherUserIsAuthorized;