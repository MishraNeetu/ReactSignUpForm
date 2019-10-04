import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm.js';
import SignInForm from './pages/SignInForm.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          {/* <div className="App__Aside"></div> */}
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" className="PageSwitcher__Item--Active" >Sign In</NavLink>
                <NavLink exact to="/" className="PageSwitcher__Item--Active" >Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;