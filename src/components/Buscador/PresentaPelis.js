import React, { Component } from "react";
import MontaPoster from "./MontaPoster";

export default class PresentaPelis extends Component {
  render() {
    const listaPelis = this.props.listaPelis;
    const cantidad = this.props.cantidad;
    return (
      <div>
        <h1 style={{ width: "100%" }}>
          Se han encontrado {cantidad} películas
        </h1>
        {listaPelis.map((el) => {
          return (
            <div key={el.imdbID} className="posterLista-item">
              <MontaPoster linea={el} />
            </div>
          );
        })}
      </div>
    );
  }
}
