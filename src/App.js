import "./App.css";
import React, { Component } from "react";
import Team from "./components/Team";
import SignIn from "./components/SignIn";
import chart from "./chart.jpg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: "",
    };
  }
  render() {
    return (
      <div className="App">
        <div className="headder">
          <h1 className="title">Team Builder</h1>
        </div>
        {/* {(() => {
          switch (this.state.signedIn) {
            case "true":
              return <Team />;
            default:
              return (
                <div className="signInArea">
                  <SignIn />
                </div>
              );
          }
        })()} */}
        <Team />
        <img src={chart} alt="chart" className="chart"></img>
      </div>
    );
  }
}

export default App;
