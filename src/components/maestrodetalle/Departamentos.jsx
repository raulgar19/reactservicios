import React, { Component } from "react";
import Empleados from "./Empleados";
import Global from "../../Global";
import axios from "axios";

export default class Departamentos extends Component {
  url = Global.urlDepartamentos;
  selectDepartamento = React.createRef();

  state = {
    departamentos: [],
    idDepartamento: 0,
  };

  loadDepartamentos = () => {
    var request = "webresources/departamentos";

    axios(this.url + request).then((response) => {
      console.log("Leyendo departamentos...");
      this.setState({
        departamentos: response.data,
      });
    });
  };

  buscarEmpleados = (event) => {
    event.preventDefault();
    let idDepartamento = this.selectDepartamento.current.value;

    this.setState({
      idDepartamento: idDepartamento,
    });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  };

  render() {
    return (
      <div>
        <h1>Departamentos Component</h1>
        <form>
          <select ref={this.selectDepartamento}>
            {this.state.departamentos.map((departamento, index) => {
              return (
                <option key={index} value={departamento.numero}>
                  {departamento.nombre}
                </option>
              );
            })}
          </select>
          <button onClick={this.buscarEmpleados}>Buscar empleados</button>
        </form>
        {this.state.idDepartamento !== 0 && (
          <Empleados idDepartamento={this.state.idDepartamento} />
        )}
      </div>
    );
  }
}
