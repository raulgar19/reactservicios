import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class Empleados extends Component {
  url = Global.urlEmpleados;

  state = {
    empleados: [],
  };

  loadEmpleados = () => {
    let idDepartamento = this.props.idDepartamento;
    var request = "api/empleados/empleadosdepartamento/" + idDepartamento;

    axios(this.url + request).then((response) => {
      this.setState({
        empleados: response.data,
      });
    });
  };

  componentDidUpdate = (oldProps) => {
    if (this.props.idDepartamento !== oldProps.idDepartamento) {
      this.loadEmpleados();
    }
  };

  componentDidMount = () => {
    this.loadEmpleados();
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>
          Empleados Component {this.props.idDepartamento}
        </h1>
        <ul>
          {this.state.empleados.map((empleado, index) => {
            return (
              <li key={index}>
                {empleado.apellido} - {empleado.oficio} -{" "}
                {empleado.departamento}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
