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
      types1: [],
      types2: [],
      types3: [],
      types4: [],
      types5: [],
      types6: [],
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
    this.state.poke1.data.types.forEach((element) => {
      this.setState({ types1: [...this.state.types1, element.type.name] });
    });
  }

  async addPoke2(name) {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = res.data;
    this.setState({ poke2: { full: true, data: data } });
    this.state.poke2.data.types.forEach((element) => {
      this.setState({ types2: [...this.state.types2, element.type.name] });
    });
  }

  async addPoke3(name) {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = res.data;
    this.setState({ poke3: { full: true, data: data } });
    this.state.poke3.data.types.forEach((element) => {
      this.setState({ types3: [...this.state.types3, element.type.name] });
    });
  }

  async addPoke4(name) {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = res.data;
    this.setState({ poke4: { full: true, data: data } });
    this.state.poke4.data.types.forEach((element) => {
      this.setState({ types4: [...this.state.types4, element.type.name] });
    });
  }

  async addPoke5(name) {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = res.data;
    this.setState({ poke5: { full: true, data: data } });
    this.state.poke5.data.types.forEach((element) => {
      this.setState({ types5: [...this.state.types5, element.type.name] });
    });
  }

  async addPoke6(name) {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = res.data;
    this.setState({ poke6: { full: true, data: data } });
    this.state.poke6.data.types.forEach((element) => {
      this.setState({ types6: [...this.state.types6, element.type.name] });
    });
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
    // let type1 = this.state.types1.map((d) => (
    //   <p className="types">{d.type.name}</p>
    // ));
    return (
      <div className="teamCard">
        <div className="pokeCard">
          {(() => {
            switch (this.state.poke1.full) {
              case true:
                return (
                  <div className="pokeInfo">
                    <h1 className="pokeNumber">#{this.state.poke1.data.id}</h1>
                    <h1 className="pokeName">{this.state.poke1.data.name}</h1>
                    <img
                      src={this.state.poke1.data.sprites.front_default}
                      alt={this.state.poke1.data.name}
                    ></img>
                    <p className="types">{this.state.types1.join()}</p>
                    <h2 className="statTitle">Base Stats</h2>
                    <ul className="stats">
                      <li className="stat">
                        {this.state.poke1.data.stats[0].stat.name}:{" "}
                        {this.state.poke1.data.stats[0].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke1.data.stats[1].stat.name}:{" "}
                        {this.state.poke1.data.stats[1].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke1.data.stats[2].stat.name}:{" "}
                        {this.state.poke1.data.stats[2].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke1.data.stats[3].stat.name}:{" "}
                        {this.state.poke1.data.stats[3].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke1.data.stats[4].stat.name}:{" "}
                        {this.state.poke1.data.stats[4].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke1.data.stats[5].stat.name}:{" "}
                        {this.state.poke1.data.stats[5].base_stat}
                      </li>
                    </ul>
                  </div>
                );
              default:
                return (
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
                );
            }
          })()}
        </div>
        <div className="pokeCard">
          {(() => {
            switch (this.state.poke2.full) {
              case true:
                return (
                  <div className="pokeInfo">
                    <h1 className="pokeNumber">#{this.state.poke2.data.id}</h1>
                    <h1 className="pokeName">{this.state.poke2.data.name}</h1>
                    <img
                      src={this.state.poke2.data.sprites.front_default}
                      alt={this.state.poke2.data.name}
                    ></img>
                    <p className="types">{this.state.types2.join()}</p>
                    <h2 className="statTitle">Base Stats</h2>
                    <ul className="stats">
                      <li className="stat">
                        {this.state.poke2.data.stats[0].stat.name}:{" "}
                        {this.state.poke2.data.stats[0].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke2.data.stats[1].stat.name}:{" "}
                        {this.state.poke2.data.stats[1].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke2.data.stats[2].stat.name}:{" "}
                        {this.state.poke2.data.stats[2].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke2.data.stats[3].stat.name}:{" "}
                        {this.state.poke2.data.stats[3].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke2.data.stats[4].stat.name}:{" "}
                        {this.state.poke2.data.stats[4].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke2.data.stats[5].stat.name}:{" "}
                        {this.state.poke2.data.stats[5].base_stat}
                      </li>
                    </ul>
                  </div>
                );
              default:
                return (
                  <form
                    className="addForm"
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.addPoke2(this.state.name2);
                    }}
                  >
                    <input
                      className="pickName"
                      placeholder="Enter a name or number"
                      value={this.state.name2}
                      onChange={this.handleName2}
                    ></input>
                    <input type="submit" className="addPoke" id="add2"></input>
                  </form>
                );
            }
          })()}
        </div>
        <div className="pokeCard">
          {(() => {
            switch (this.state.poke3.full) {
              case true:
                return (
                  <div className="pokeInfo">
                    <h1 className="pokeNumber">#{this.state.poke3.data.id}</h1>
                    <h1 className="pokeName">{this.state.poke3.data.name}</h1>
                    <img
                      src={this.state.poke3.data.sprites.front_default}
                      alt={this.state.poke3.data.name}
                    ></img>
                    <p className="types">{this.state.types3.join()}</p>
                    <h2 className="statTitle">Base Stats</h2>
                    <ul className="stats">
                      <li className="stat">
                        {this.state.poke3.data.stats[0].stat.name}:{" "}
                        {this.state.poke3.data.stats[0].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke3.data.stats[1].stat.name}:{" "}
                        {this.state.poke3.data.stats[1].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke3.data.stats[2].stat.name}:{" "}
                        {this.state.poke3.data.stats[2].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke3.data.stats[3].stat.name}:{" "}
                        {this.state.poke3.data.stats[3].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke3.data.stats[4].stat.name}:{" "}
                        {this.state.poke3.data.stats[4].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke3.data.stats[5].stat.name}:{" "}
                        {this.state.poke3.data.stats[5].base_stat}
                      </li>
                    </ul>
                  </div>
                );
              default:
                return (
                  <form
                    className="addForm"
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.addPoke3(this.state.name3);
                    }}
                  >
                    <input
                      className="pickName"
                      placeholder="Enter a name or number"
                      value={this.state.name3}
                      onChange={this.handleName3}
                    ></input>
                    <input type="submit" className="addPoke" id="add3"></input>
                  </form>
                );
            }
          })()}
        </div>
        <div className="pokeCard">
          {(() => {
            switch (this.state.poke4.full) {
              case true:
                return (
                  <div className="pokeInfo">
                    <h1 className="pokeNumber">#{this.state.poke4.data.id}</h1>
                    <h1 className="pokeName">{this.state.poke4.data.name}</h1>
                    <img
                      src={this.state.poke4.data.sprites.front_default}
                      alt={this.state.poke4.data.name}
                    ></img>
                    <p className="types">{this.state.types4.join()}</p>
                    <h2 className="statTitle">Base Stats</h2>
                    <ul className="stats">
                      <li className="stat">
                        {this.state.poke4.data.stats[0].stat.name}:{" "}
                        {this.state.poke4.data.stats[0].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke4.data.stats[1].stat.name}:{" "}
                        {this.state.poke4.data.stats[1].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke4.data.stats[2].stat.name}:{" "}
                        {this.state.poke4.data.stats[2].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke4.data.stats[3].stat.name}:{" "}
                        {this.state.poke4.data.stats[3].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke4.data.stats[4].stat.name}:{" "}
                        {this.state.poke4.data.stats[4].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke4.data.stats[5].stat.name}:{" "}
                        {this.state.poke4.data.stats[5].base_stat}
                      </li>
                    </ul>
                  </div>
                );
              default:
                return (
                  <form
                    className="addForm"
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.addPoke4(this.state.name4);
                    }}
                  >
                    <input
                      className="pickName"
                      placeholder="Enter a name or number"
                      value={this.state.name4}
                      onChange={this.handleName4}
                    ></input>
                    <input type="submit" className="addPoke" id="add4"></input>
                  </form>
                );
            }
          })()}
        </div>
        <div className="pokeCard">
          {(() => {
            switch (this.state.poke5.full) {
              case true:
                return (
                  <div className="pokeInfo">
                    <h1 className="pokeNumber">#{this.state.poke5.data.id}</h1>
                    <h1 className="pokeName">{this.state.poke5.data.name}</h1>
                    <img
                      src={this.state.poke5.data.sprites.front_default}
                      alt={this.state.poke5.data.name}
                    ></img>
                    <p className="types">{this.state.types5.join()}</p>
                    <h2 className="statTitle">Base Stats</h2>
                    <ul className="stats">
                      <li className="stat">
                        {this.state.poke5.data.stats[0].stat.name}:{" "}
                        {this.state.poke5.data.stats[0].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke5.data.stats[1].stat.name}:{" "}
                        {this.state.poke5.data.stats[1].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke5.data.stats[2].stat.name}:{" "}
                        {this.state.poke5.data.stats[2].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke5.data.stats[3].stat.name}:{" "}
                        {this.state.poke5.data.stats[3].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke5.data.stats[4].stat.name}:{" "}
                        {this.state.poke5.data.stats[4].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke5.data.stats[5].stat.name}:{" "}
                        {this.state.poke5.data.stats[5].base_stat}
                      </li>
                    </ul>
                  </div>
                );
              default:
                return (
                  <form
                    className="addForm"
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.addPoke5(this.state.name5);
                    }}
                  >
                    <input
                      className="pickName"
                      placeholder="Enter a name or number"
                      value={this.state.name5}
                      onChange={this.handleName5}
                    ></input>
                    <input type="submit" className="addPoke" id="add5"></input>
                  </form>
                );
            }
          })()}
        </div>
        <div className="pokeCard">
          {(() => {
            switch (this.state.poke6.full) {
              case true:
                return (
                  <div className="pokeInfo">
                    <h1 className="pokeNumber">#{this.state.poke6.data.id}</h1>
                    <h1 className="pokeName">{this.state.poke6.data.name}</h1>
                    <img
                      src={this.state.poke6.data.sprites.front_default}
                      alt={this.state.poke6.data.name}
                    ></img>
                    <p className="types">{this.state.types6.join()}</p>
                    <h2 className="statTitle">Base Stats</h2>
                    <ul className="stats">
                      <li className="stat">
                        {this.state.poke6.data.stats[0].stat.name}:{" "}
                        {this.state.poke6.data.stats[0].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke6.data.stats[1].stat.name}:{" "}
                        {this.state.poke6.data.stats[1].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke6.data.stats[2].stat.name}:{" "}
                        {this.state.poke6.data.stats[2].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke6.data.stats[3].stat.name}:{" "}
                        {this.state.poke6.data.stats[3].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke6.data.stats[4].stat.name}:{" "}
                        {this.state.poke6.data.stats[4].base_stat}
                      </li>
                      <li className="stat">
                        {this.state.poke6.data.stats[5].stat.name}:{" "}
                        {this.state.poke6.data.stats[5].base_stat}
                      </li>
                    </ul>
                  </div>
                );
              default:
                return (
                  <form
                    className="addForm"
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.addPoke6(this.state.name6);
                    }}
                  >
                    <input
                      className="pickName"
                      placeholder="Enter a name or number"
                      value={this.state.name6}
                      onChange={this.handleName6}
                    ></input>
                    <input type="submit" className="addPoke" id="add6"></input>
                  </form>
                );
            }
          })()}
        </div>
      </div>
    );
  }
}

export default Team;
