import React, { Component } from "react";

export default class Menurutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tabla/21">Tabla Multiplicar 21</a>
          </li>
          <li>
            <a href="/tabla/7">Tabla Multiplicar 7</a>
          </li>
          <li>
            <a href="/tabla/33">Tabla Multiplicar 33</a>
          </li>
          <li>
            <a href="/collatz/21">Conjetura de Collatz 21</a>
          </li>
          <li>
            <a href="/collatz/7">Conjetura de Collatz 7</a>
          </li>
          <li>
            <a href="/collatz/33">Conjetura de Collatz 33</a>
          </li>
        </ul>
      </div>
    );
  }
}
