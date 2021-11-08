import React, { Component } from "react";
import axios from "axios";

class Team extends Component {
  constructor() {
    super();
    this.state = {
      poke1: { full: false },
      poke2: { full: false },
      poke3: { full: false },
      poke4: { full: false },
      poke5: { full: false },
      poke6: { full: false },
      name1: "",
      name2: "",
      name3: "",
      name4: "",
      name5: "",
      name6: "",
    };
    this.handleName1 = this.handleName1.bind(this);
    this.handleName2 = this.handleName2.bind(this);
    this.handleName3 = this.handleName3.bind(this);
    this.handleName4 = this.handleName4.bind(this);
    this.handleName5 = this.handleName5.bind(this);
    this.handleName6 = this.handleName6.bind(this);
  }

  async addPoke1(name) {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = res.data;
    console.log(data);
    this.setState({ poke1: { full: true, data: data } });
  }

  async addPoke2(name) {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = res.data;
    this.setState({ poke2: { full: true, data: data } });
  }

  async addPoke3(name) {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = res.data;
    this.setState({ poke3: { full: true, data: data } });
  }

  async addPoke4(name) {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = res.data;
    this.setState({ poke4: { full: true, data: data } });
  }

  async addPoke5(name) {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = res.data;
    this.setState({ poke5: { full: true, data: data } });
  }

  async addPoke6(name) {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = res.data;
    this.setState({ poke6: { full: true, data: data } });
  }

  handleName1(event) {
    this.setState({ name1: event.target.value });
  }

  handleName2(event) {
    this.setState({ name2: event.target.value });
  }

  handleName3(event) {
    this.setState({ name3: event.target.value });
  }

  handleName4(event) {
    this.setState({ name4: event.target.value });
  }

  handleName5(event) {
    this.setState({ name5: event.target.value });
  }

  handleName6(event) {
    this.setState({ name6: event.target.value });
  }

  render() {
    return (
      <div className="teamCard">
        <div className="pokeCard">
          <form
            className="addForm"
            onSubmit={(e) => {
              e.preventDefault();
              this.addPoke1(this.state.name1);
            }}
          >
            <input
              className="pickName"
              placeholder="Enter a name or number"
              value={this.state.name1}
              onChange={this.handleName1}
            ></input>
            <input type="submit" className="addPoke" id="add1"></input>
          </form>
        </div>
        <div className="pokeCard">
          <form className="addForm">
            <input
              className="pickName"
              placeholder="Enter a name or number"
              value={this.state.name2}
              onChange={this.handleName2}
            ></input>
            <input type="submit" className="addPoke" id="add1"></input>
          </form>
        </div>
        <div className="pokeCard">
          <form className="addForm">
            <input
              className="pickName"
              placeholder="Enter a name or number"
              value={this.state.name3}
              onChange={this.handleName3}
            ></input>
            <input type="submit" className="addPoke" id="add1"></input>
          </form>
        </div>
        <div className="pokeCard">
          <form className="addForm">
            <input
              className="pickName"
              placeholder="Enter a name or number"
              value={this.state.name4}
              onChange={this.handleName4}
            ></input>
            <input type="submit" className="addPoke" id="add1"></input>
          </form>
        </div>
        <div className="pokeCard">
          <form className="addForm">
            <input
              className="pickName"
              placeholder="Enter a name or number"
              value={this.state.name5}
              onChange={this.handleName5}
            ></input>
            <input type="submit" className="addPoke" id="add1"></input>
          </form>
        </div>
        <div className="pokeCard">
          <form className="addForm">
            <input
              className="pickName"
              placeholder="Enter a name or number"
              value={this.state.name6}
              onChange={this.handleName6}
            ></input>
            <input type="submit" className="addPoke" id="add1"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Team;
