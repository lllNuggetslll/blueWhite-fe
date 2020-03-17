import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  LoginScreen,
  AccountScreen,
  ProfileScreen,
  ScreenContainer,
  TransferScreen
} from "./components";
import { ProtectedRoute } from "./utils";

function App() {
  return (
    <Switch>
      <ScreenContainer>
        <Route path="/" component={LoginScreen} exact />
        <ProtectedRoute path="/account" component={AccountScreen} exact />
        <ProtectedRoute path="/profile" component={ProfileScreen} exact />
        <ProtectedRoute path="/transfer" component={TransferScreen} exact />
      </ScreenContainer>
    </Switch>
  );
}

export default App;
