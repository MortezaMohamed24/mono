import "./style/style";
import "./features/init";

import User from "./user";
import React from "react";
import Login from "./pages/loginPage";
import Signup from "./pages/signupPage";
import {store} from "./store";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import {Provider} from "react-redux";
import PageNotFound from "./pages/NotFoundPage";
import {BrowserRouter} from "react-router-dom";
import ReduxReactRouter from "./components/routerController";


const Application = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      
        <Switch>
          <Route 
            path="/signup"
            exact={true}
            component={Signup}
          />
          <Route 
            path="/login"
            exact={true}
            component={Login}
          />
          <Route
            path="/"
            exact={true}
            component={User} 
          />
          <Route
            path={["home", "/boards", "/cards"]}
            exact={false}
            component={User} 
          />
          <Route 
            path="" 
            exact={false} 
            component={PageNotFound} 
          />
        </Switch>

        <ReduxReactRouter />
      </BrowserRouter>
    </Provider>
  );
};


export default Application;