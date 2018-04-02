import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import LandingPageLayout from "./components/LandingPage/LandingPageLayout";
import AboutPageLayout from "./components/AboutPage/AboutPageLayout";
import LoginPageLayout from "./components/LoginPage/LoginPageLayout";
import SignupPageLayout from "./components/SignupPage/SignupPageLayout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPageLayout} />
            <Route exact path="/about" component={AboutPageLayout} />
            <Route exact path="/login" component={LoginPageLayout} />
            <Route exact path="/signup" component={SignupPageLayout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
