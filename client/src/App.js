import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import LandingPageLayout from "./components/LandingPage/LandingPageLayout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPageLayout />
      </div>
    );
  }
}

export default App;
