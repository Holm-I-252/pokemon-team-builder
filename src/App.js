import "./App.css";
import React, { Component } from "react";
import Team from "./components/Team";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="headder">
          <h1 className="title">Team Builder</h1>
        </div>
        <Team />
      </div>
    );
  }
}

export default App;
