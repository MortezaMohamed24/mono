import rr from "./state";
import React from "react";
import {useEffect} from "react";
import {GoRequest} from "./requests";
import {useHistory} from "react-router-dom";
import {useDispatch} from "../../store";
import {useSelector} from "../../store";
import {PushRequest} from "./requests";
import {GoBackRequest} from "./requests";
import {ReplaceRequest} from "./requests";
import {GoForwardRequest} from "./requests";


const ReduxReactRouter = React.memo<{}>(() => {
  const request = useSelector(({rr}) => rr.request.current);
  const history = useHistory();
  const dispatch = useDispatch();


  function go(req: GoRequest) {
    history.go(req.by);
    dispatch(rr.RequestFulfilled(req));
  }

  function push(req: PushRequest) {
    history.push(req.url);
    dispatch(rr.RequestFulfilled(req));
  }

  function goBack(req: GoBackRequest) {
    history.goBack();
    dispatch(rr.RequestFulfilled(req));
  }

  function replace(req: ReplaceRequest) {
    history.replace(req.url);
    dispatch(rr.RequestFulfilled(req));
  }

  function goForward(req: GoForwardRequest) {
    history.goForward();
    dispatch(rr.RequestFulfilled(req));
  }


  useEffect(() => {
    if (request) {
      try {
        switch (request.type) {
          case "go": go(request); break;
          case "push": push(request); break;
          case "goBack": goBack(request); break;
          case "replace": replace(request); break;
          case "goForward": goForward(request); break;
        }
      } 
      
      catch (e) {
        dispatch(rr.RequestRejected(request, e));
      }
    }
  }, [request]);
  
  
  return null;
});


export default ReduxReactRouter;