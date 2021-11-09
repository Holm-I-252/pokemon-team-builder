import React, { Component } from "react";
import axios from "axios";

class Poke1 extends Component {
  constructor() {
    super();
    this.state = {
      poke: { full: false },
      name: "",
    };

    this.handleName = this.handleName.bind(this);
  }

  async addPoke(name) {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let data = res.data;
    console.log(data);
    this.setState({ poke: { full: true, data: data } });
    console.log(this.state.poke.full);
  }

  handleName(event) {
    this.setState({ name1: event.target.value });
  }

  render() {
    return (
      <div className="pokeCard">
        {(() => {
          switch (this.state.poke.full) {
            case true:
              return <h1>test</h1>;
            default:
              return (
                <form
                  className="addForm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    this.addPoke(this.state.name);
                  }}
                >
                  <input
                    className="pickName"
                    placeholder="Enter a name or number"
                    value={this.state.name}
                    onChange={this.handleName}
                  ></input>
                  <input type="submit" className="addPoke"></input>
                </form>
              );
          }
        })()}
      </div>
    );
  }
}

export default Poke1;
