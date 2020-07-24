import React, { Component } from "react";

export default class MontaPoster extends Component {
  render() {
    const linea = this.props.linea;
    return (
      <div>
        <div className="card-image">
          <figure className="image">
            <img src={linea.Poster} alt={linea.Title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p>{linea.Title}</p>
              <p>{linea.Year}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
