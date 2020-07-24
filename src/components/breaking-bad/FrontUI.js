// This is the parent container, everything else is child.
import React, { Component } from "react";
import Form from "./Form";
import PresentPeople from "./PresentPeople";

export default class FrontUI extends Component {
  state = {
    results: [],
    userInput: "",
    showPosters: false,
  };

  _getDataFromForm = (results, userInput) => {
    this.setState({ results, userInput, showPosters: true });
  };

  _presentPoster = () => {
    return this.state.results.length === 0 ? (
      <p>There is no character named {this.state.userInput}</p>
    ) : (
      <PresentPeople data={this.state.results} />
    );
  };

  render() {
    console.log(this.state.results);
    return (
      <div>
        <Form sendData={this._getDataFromForm} />
        {this.state.showPosters ? (
          this._presentPoster()
        ) : (
          <p>Results will be shown here</p>
        )}
      </div>
    );
  }
}
