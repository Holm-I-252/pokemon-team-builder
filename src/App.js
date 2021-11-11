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
      userData: [],
    };
  }
  render() {
    return (
      <div className="App">
        <div className="headder">
          <h1 className="title">Team Builder</h1>
        </div>
        {(() => {
          switch (this.state.signedIn) {
            case true:
              return (
                <div className="teamArea">
                  <h1 className="welcomeUser">
                    Welcome {this.state.userData.user}!
                  </h1>
                  <Team userData={this.state.userData} />
                  <img src={chart} alt="chart" className="chart"></img>
                </div>
              );
            default:
              return (
                <div className="signInArea">
                  <SignIn
                    setStateUser={(p) => {
                      this.setState({ signedIn: p });
                      console.log(this.state.signedIn);
                    }}
                    setStateUserData={(p) => {
                      this.setState({ userData: p });
                    }}
                  />
                </div>
              );
          }
        })()}
      </div>
    );
  }
}

export default App;
