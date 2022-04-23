import "./style/style";

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



import "/features/user/reducers/init";
import "/features/boards/reducers/init";
import "/features/lists/reducers/init";
import "/features/cards/reducers/init";
import "/features/labels/reducers/init";
import "/features/checklists/reducers/init";
import "/features/checkitems/reducers/init";
import "./pages/loginPage/state/reducers/init";
import "./pages/signupPage/state/reducers/init";
import "./features/boardListCardCreator/index";
import "/components/routerController/state/reducers/init";




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