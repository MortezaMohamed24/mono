import Home from "../pages/home";
import Card from "../pages/card";
import React from "react";
import BoardPage from "../pages/boardPage";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import PageNotFound from "../pages/pageNotFound";
import withAutoLogin from "./withAutoLogin";
import automateLoading from "./withAutoLoader";
import BoardNotFoundPage from "/pages/boardNotFoundPage";


const User = withAutoLogin(() => automateLoading(() => (
  <>
    <Switch>
      <Route 
        path="/" 
        exact={true} 
        component={Home} 
      />
      <Route 
        path="/home" 
        exact={true} 
        component={Home} 
      />
      <Route 
        path="/cards/:idCard" 
        exact={true} 
        component={Card} 
      />
      <Route 
        path="/boards/:idBoard" 
        exact={false} 
        component={BoardPage} 
      />
      <Route 
        path="/404/board" 
        exact={false} 
        component={BoardNotFoundPage} 
      />
      <Route 
        path="" 
        exact={false} 
        component={PageNotFound} 
      />
    </Switch>
  </>
)));


export default User;