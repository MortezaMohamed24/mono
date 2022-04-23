import ur from "/features/user";
import React from "react";
import Loading from "/pages/mainLoadingPage";
import UserArea from "./userArea";
import {useEffect} from "react";
import useListener from "/util/hooks/useListener";
import LoadErrorPage from "/pages/loadError";
import {useDispatch} from "/store";
import {useSelector} from "/store";


// TODO: This is not a complete implementation, complete it
function LoadUserData() {
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
      <LoadErrorPage 
        error={user.$error} 
        retry={load}
      />
    );
  } 
  
  return <UserArea />;
}


export default LoadUserData;