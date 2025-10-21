import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menurutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/21">Tabla Multiplicar 21</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/7">Tabla Multiplicar 7</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/33">Tabla Multiplicar 33</NavLink>
          </li>
          <li>
            <NavLink to="/collatz/21">Conjetura de Collatz 21</NavLink>
          </li>
          <li>
            <NavLink to="/collatz/7">Conjetura de Collatz 7</NavLink>
          </li>
          <li>
            <NavLink to="/collatz/33">Conjetura de Collatz 33</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
