import "./style/style";

import User from "./user";
import React from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import {store} from "./store";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import {Provider} from "react-redux";
import PageNotFound from "./pages/pageNotFound";
import {BrowserRouter} from "react-router-dom";
import ReduxReactRouter from "./components/routerController";



import "/user/reducers/init";
import "/boards/reducers/init";
import "/lists/reducers/init";
import "/cards/reducers/init";
import "/labels/reducers/init";
import "/checklists/reducers/init";
import "/checkitems/reducers/init";
import "/pages/login/state/reducers/init";
import "/pages/signup/state/reducers/init";
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