import React, { Component } from "react";
import axios from "axios";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      createPass: "",
      createUsername: "",
      signInUsername: "",
      signInPass: "",
    };
    this.handleNewUsername = this.handleNewUsername.bind(this);
    this.handleNewPass = this.handleNewPass.bind(this);
    this.handleLogInUsername = this.handleLogInUsername.bind(this);
    this.handleLogInPass = this.handleLogInPass.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
  }

  handleNewUsername(event) {
    this.setState({ createUsername: event.target.value });
  }

  handleNewPass(event) {
    this.setState({ createPass: event.target.value });
  }

  handleLogInUsername(event) {
    this.setState({ signInUsername: event.target.value });
  }

  handleLogInPass(event) {
    this.setState({ signInPass: event.target.value });
  }

  async handleLogIn(event) {
    event.preventDefault();
    let userExists = false;
    let userData = [];

    let res = await axios.get("http://localhost:4005/api/signIn");

    res.data.forEach((element) => {
      if (
        element.user === this.state.signInUsername &&
        element.password === this.state.signInPass
      ) {
        userExists = true;
        userData = element;
      }
    });

    if (this.state.signInUsername === "" || this.state.signInPass === "") {
      alert("Please enter values in all fields");
    } else if (userExists === false) {
      alert(
        "Incorrect username or password. Please try again or create an account."
      );
    } else {
      this.props.setStateUser(true);
      this.props.setStateUserData(userData);
    }

    this.setState({ signInUsername: "" });
    this.setState({ signInPass: "" });
  }

  handleNewUser(event) {
    event.preventDefault();
    console.log(this.state.createUsername, this.state.createPass);
    this.setState({ createUsername: "" });
    this.setState({ createPass: "" });
  }

  render() {
    return (
      <div className="signInCard">
        <div className="signIn">
          <h2 className="signInTitle">Sign In</h2>
          <form className="signInForm" onSubmit={this.handleLogIn}>
            <input
              className="signInName"
              placeholder="Enter Username"
              value={this.state.signInUsername}
              onChange={this.handleLogInUsername}
            ></input>
            <input
              type="password"
              className="signInPass"
              placeholder="Enter Password"
              value={this.state.signInPass}
              onChange={this.handleLogInPass}
            ></input>
            <input className="submitBtn" type="submit"></input>
          </form>
        </div>
        <div className="createUser">
          <h2 className="createUserTitle">Sign Up</h2>
          <form className="createUserForm" onSubmit={this.handleNewUser}>
            <input
              className="createUsername"
              placeholder="Enter username"
              value={this.state.createUsername}
              onChange={this.handleNewUsername}
            ></input>
            <input
              type="password"
              className="createPassword"
              placeholder="Enter Password"
              value={this.state.createPass}
              onChange={this.handleNewPass}
            ></input>
            <input className="submitBtn" type="submit"></input>
          </form>
        </div>
      </div>
    );
  }
}
export default SignIn;
