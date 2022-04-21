import React from "react";
import Loading from "/pages/loading";
import {Errors} from "/api/login/status";
import LoadError from "/pages/loadError";
import {useState} from "react";
import {Redirect} from "react-router-dom";
import {useEffect} from "react";
import {isAuthorized} from "/api/login/status";


type Props = {
  children: JSX.Element | JSX.Element[];
}

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


const enumErrorToString = (error: unknown) => {
  console.log({error})
  switch (error) {
    case Errors.OFFLINE:
      return "You Are Not Connected To The Internet";
    case Errors.CONNECTION: 
      return "Couldn't Connect To The Server, Check Your Connection And Proxy Settings Or Try Again Later";
    default: 
      return "An Unexpected Error Occoured. \nTry reloading the page."; 
  }
};


const withAutoLogin = (Component: React.FunctionComponent<{}>) => () => {
  const [{error, status, authorized}, setState] = useState<State>(init);


  console.log({error, status, authorized})

  const checkAuthority = async () => {
    if (status !== "loading") {
      setState({error: null, status: "loading", authorized: null});

      try {
        setState({error: null, status: "succeded", authorized: await isAuthorized()});
      } catch (e) {
        setState({error: enumErrorToString(e), status: "failed", authorized: null});
      }
    }
  };


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
    return <Component />;
  } else {
    return <Redirect to="/login" />;
  }
};


export default withAutoLogin;