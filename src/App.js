import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import PrivateRoute from "./components/auth/PrivateRoute";
import PublicRoute from "./components/auth/PublicRoute";
import HeroSection from "./components/web-pages/HeroSection";
import AboutSection from "./components/web-pages/AboutSection";


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={Dashboard}
            auth={props.auth}
          />
          <PrivateRoute
            exact
            path="/herosection"
            component={HeroSection}
            auth={props.auth}
          />
          <PrivateRoute
            exact
            path="/aboutsection"
            component={AboutSection}
            auth={props.auth}
          />
          <PublicRoute
            exact
            path="/signin"
            component={SignIn}
            auth={props.auth}
          />
          <PublicRoute
            exact
            path="/signup"
            component={SignUp}
            auth={props.auth}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(App);
