import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "./API_URL";

export default class Form extends Component {
  state = { userInput: "", results: [] };

  _inputChangedHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _getDataFromApi = async () => {
    return await axios
      .get(`${API_URL}${this.state.userInput}`)
      .then((el) => this.setState({ results: el.data }))
      .then(() =>
        this.props.sendData(this.state.results, this.state.userInput)
      );
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="userInput"
          value={this.state.userInput}
          onChange={this._inputChangedHandler}
        />
        <button onClick={this._getDataFromApi}>Search Char</button>
      </div>
    );
  }
}
