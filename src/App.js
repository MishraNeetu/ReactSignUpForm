import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm.js";
import SignInForm from "./pages/SignInForm.js";
import Home from "./pages/home.js";
import "./App.css";
import NewUser from "./pages/NewUser";

const hide = {};
class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          {/* <div className="App__Aside"></div> */}
          <div className="App__Form">
            {/* <div className="PageSwitcher">
                <NavLink to="/sign-in" className="PageSwitcher__Item--Active" >Sign In</NavLink>
                <NavLink exact to="/" className="PageSwitcher__Item--Active" >Sign Up</NavLink>
              </div> */}

            <div style={hide} className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/NewUser" component={NewUser}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
