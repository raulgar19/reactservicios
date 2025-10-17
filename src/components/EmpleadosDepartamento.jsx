import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

class EmpleadosDepartamento extends Component {
  urlEmpleados = Global.urlEmpleados;
  urlDepartamentos = Global.urlDepartamentos;

  selectDepartamento = React.createRef();

  state = {
    empleados: [],
    departamentos: [],
  };

  loadDepartamentos = () => {
    var request = "webresources/departamentos";

    axios.get(this.urlDepartamentos + request).then((response) => {
      console.log("Cargando departamentos...");

      this.setState({
        departamentos: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  };

  buscarEmpleados = (event) => {
    event.preventDefault();
    var idDepartamento = parseInt(this.selectDepartamento.current.value);
    var request = "api/empleados/empleadosdepartamento/" + idDepartamento;

    axios.get(this.urlEmpleados + request).then((response) => {
      console.log("Leyendo empleados...");
      this.setState({
        empleados: response.data,
      });
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>Empleados Departamento</h1>
        <form>
          <select ref={this.selectDepartamento}>
            {this.state.departamentos.map((departamento, index) => {
              return (
                <option key={index} value={departamento.numero}>
                  {departamento.nombre} - {departamento.localidad}
                </option>
              );
            })}
          </select>
          <button onClick={this.buscarEmpleados}>Buscar Empleados</button>
        </form>
        <ul>
          {this.state.empleados.map((empleado, index) => {
            return <li key={index}>{empleado.apellido}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default EmpleadosDepartamento;
