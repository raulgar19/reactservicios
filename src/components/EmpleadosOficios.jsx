import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class EmpleadosOficios extends Component {
  selectOficio = React.createRef();
  urlEmpleados = Global.urlEmpleados;

  state = {
    oficios: [],
    empleados: [],
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

  buscarEmpleados = () => {};

  render() {
    return (
      <div>
        <h1>Empleados Oficios</h1>
        <form>
          <label>Selecciona el oficio</label>
          <select ref={this.selectOficio}>
            {this.state.oficios.map((oficio, index) => {
              return (
                <option key={index} value={oficio}>
                  {oficio}
                </option>
              );
            })}
            <button onClick={this.buscarEmpleados}>Buscar empleados</button>
          </select>
        </form>
      </div>
    );
  }
}
