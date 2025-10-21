import React, { Component } from "react";

export default class Collatz extends Component {
  state = {
    secuencia: [],
  };

  calcularSecuencia = () => {
    const numero = parseInt(this.props.numero);
    const secuencia = [];

    if (!isNaN(numero) && numero > 0) {
      let num = numero;
      while (num !== 1) {
        secuencia.push(num);
        num = num % 2 === 0 ? num / 2 : 3 * num + 1;
      }
      secuencia.push(1);
    }

    this.setState({ secuencia });
  };

  componentDidMount() {
    this.calcularSecuencia();
  }

  componentDidUpdate(prevProps) {
    // Solo recalculamos si el número cambió
    if (prevProps.numero !== this.props.numero) {
      this.calcularSecuencia();
    }
  }

  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>
        <h2>Número: {this.props.numero}</h2>
        <ul>
          {this.state.secuencia.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>
    );
  }
}
