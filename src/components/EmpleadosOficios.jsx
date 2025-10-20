import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class EmpleadosOficios extends Component {
  selectOficio = React.createRef();
  urlEmpleados = Global.urlEmpleados;

  state = {
    oficios: [],
    empleados: [],
    empleadosOficios: [],
  };

  loadOficios = () => {
    var request = "api/empleados";

    axios.get(this.urlEmpleados + request).then((response) => {
      console.log("Leyendo empleados...");
      var aux = [];

      for (let empleado of response.data) {
        if (!aux.includes(empleado.oficio)) {
          aux.push(empleado.oficio);
        }
        this.setState({
          oficios: aux,
        });
      }

      console.log("Oficios sin duplicados:", aux);

      this.setState({
        oficios: aux,
      });
    });
  };

  componentDidMount() {
    this.loadOficios();
  }

  buscarEmpleados = (event) => {
    event.preventDefault();
    let oficio = this.selectOficio.current.value;
    let request = "api/empleados/empleadosoficio/" + oficio;

    axios(this.urlEmpleados + request).then((response) => {
      console.log("Filtrando empleados...");
      this.setState({
        empleadosOficios: response.data,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Empleados Oficios</h1>
        <form>
          <label>Selecciona el oficio: </label>
          <select ref={this.selectOficio}>
            {this.state.oficios.map((oficio, index) => {
              return (
                <option key={index} value={oficio}>
                  {oficio}
                </option>
              );
            })}
          </select>
          <button onClick={this.buscarEmpleados}>Buscar empleados</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Salario</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empleadosOficios.map((empleado, index) => {
              return (
                <tr>
                  <td key={index}>{empleado.apellido}</td>
                  <td key={index}>{empleado.oficio}</td>
                  <td key={index}>{empleado.salario}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
