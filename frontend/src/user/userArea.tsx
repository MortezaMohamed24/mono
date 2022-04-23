import Home from "/pages/homePage";
import Card from "../pages/cardPage";
import React from "react";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import BoardPage from "/pages/boardPage";
import PageNotFound from "/pages/NotFoundPage";
import BoardNotFoundPage from "/pages/boardNotFoundPage";


const UserArea = React.memo(() => (
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
));


export default UserArea;