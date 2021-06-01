import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home, Login, Register, RecPassword, Menu, MenuAdmin } from "./screens";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/rec-password" component={RecPassword} />
      <Route exact path="/register" component={Register} />

      <Route exact path="/menu" component={Menu} />
      <Route exact path="/menuadmin" component={MenuAdmin} />

      <Route
        component={() => (
          <div> Page 404 ! Página não encontrada ou tente mais tarde </div>
        )}
      />
    </Switch>
  );
};
