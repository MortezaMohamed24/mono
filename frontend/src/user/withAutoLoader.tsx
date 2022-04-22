import ur from "/user";
import React from "react";
import Loading from "../pages/mainLoadingPage";
import {Errors} from "../util/fetch";
import LoadError from "/pages/loadError";
import {useEffect} from "react";
import useListener from "/util/hooks/useListener";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";


const verbalizeError = (error: Errors): string => {
  switch (error) {
    case Errors.BODY: return "An unexpected error occured: Server responded with invalid data. \n Try again later";
    case Errors.OFFLINE: return "You are not connected to the internet";
    case Errors.SERVER: return "Something on the server went wrong, try again later";
    case Errors.CONNECTION: return "Couldn't connect to the server, check your connection and proxy settings or try again later";
    default: return "An unkown error occured.\nTry reloading the page ";
  }
};

const automateLoading = (Component: React.FunctionComponent<{}>) => {
  const user = useSelector(ur.user);
  const dispatch = useDispatch();


  function load() {
    if (user.$status !== "loading") {
      dispatch(ur.load(undefined));
    }
  }

  function clear() {
    if (user.$status === "succeeded") {
      // dispatch(ur.cleared());
    }
  }

  function reload() {

  }


  const onOnline = useListener<Event>(() => {
    switch (user.$status) {
      case "idle":
      case "failed":
        load();
        break;
    }
  });


  useEffect(() => {
    if (user.$status === "idle") {
      load();
    }
  }, [user.$status]);

  useEffect(() => {
    globalThis.addEventListener("online", onOnline);

    return () => { 
      globalThis.removeEventListener("online", onOnline); 
    };
  }, []);

  useEffect(() => {
    clear();
  }, []);


  if ((
    user?.$status === "idle"
  ) || (
    user?.$status === "loading"
  )) {
    return (
      <Loading />
    );
  } 
  
  if (user?.$status === "failed") {
    return (
      <LoadError 
        error={verbalizeError(user?.$error as any)} 
        retry={load}
      />
    );
  } 
  
  return <Component />;
};


export default automateLoading;