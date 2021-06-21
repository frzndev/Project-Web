import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useAuth } from "./contexts";
import { Home, Login, Register, RecPassword, Menu, MenuAdmin } from "./screens";
import Loading from "./components/Loading";
import ErrorPage from "./components/ErrorPage";

export const Routes = () => {
  const { logged, user, loading } = useAuth();

  console.log(loading);
  console.log(logged);
  console.log(user);

  if (loading) {
    return <Loading />;
  }

  return logged ? (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/menu" />} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menuadmin" component={MenuAdmin} />
        <Route path="*" render={() => <Redirect to="/menu" />} />
      </Switch>
    </Router>
  ) : (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/rec-password" component={RecPassword} />
        <Route exact path="/register" component={Register} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};
