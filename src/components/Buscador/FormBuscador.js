import React, { Component } from "react";

export default class FormBuscador extends Component {
  state = { userInput: "" };

  _inputChangedHandler = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  _handleSubmit = (e) => {
    e.preventDefault();
    const ruta = `http://www.omdbapi.com/?i=tt3896198&apikey=1fe8cf44&s=${this.state.userInput}`;
    console.log(ruta);
    fetch(ruta)
      .then((res) => res.json())
      .then((results) => {
        console.log("From form ");
        console.log(results);
        const { Response = "", Search = [], totalResults } = results;
        if (Response !== "False") {
          this.props.entrega(Search, totalResults);
        }
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field-has-addons">
          <div className="control">
            <input
              type="text"
              placeholder="Titulo"
              onChange={this._inputChangedHandler}
              name="userInput"
            />
            <button type="submit">Search</button>
          </div>
        </div>
      </form>
    );
  }
}
