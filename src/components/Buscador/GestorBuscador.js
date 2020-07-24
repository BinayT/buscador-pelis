import React, { Component } from "react";
import { Titulo } from "./Titulo";
import FormBuscador from "./FormBuscador";
import PresentaPelis from "./PresentaPelis";

export default class GestorBuscador extends Component {
  state = { resultados: [], buscador: false, numero: 0 };

  _handelContenido = (resultados, numero) => {
    this.setState({ resultados, buscador: true, numero });
    console.log("From gestor ");
    console.log(this.state);
  };

  _presentarBusqueda = () => {
    return this.state.resultados.length === 0 ? (
      <p>No hay coincidencia</p>
    ) : (
      <PresentaPelis
        listaPelis={this.state.resultados}
        cantidad={this.state.numero}
      />
    );
  };

  render() {
    return (
      <div>
        <Titulo>Buscador de Pelis</Titulo>
        <div className="buscador">
          <FormBuscador entrega={this._handelContenido} />
        </div>
        {this.state.buscador ? (
          this._presentarBusqueda()
        ) : (
          <p>Indique una pelicula para buscar.</p>
        )}
      </div>
    );
  }
}
