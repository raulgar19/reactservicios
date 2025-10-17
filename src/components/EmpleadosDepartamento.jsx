import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

class EmpleadosDepartamento extends Component {
  url = Global.urlEmpleados;
  cajaDepartamento = React.createRef();

  state = {
    empleados: [],
  };

  buscarEmpleados = (event) => {
    event.preventDefault();
    var idDepartamento = parseInt(this.cajaDepartamento.current.value);
    var request = "api/empleados/empleadosdepartamento/" + idDepartamento;

    axios.get(this.url + request).then((response) => {
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
          <input type="number" ref={this.cajaDepartamento} />
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
