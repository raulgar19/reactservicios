import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class Trabajadores extends Component {
  url = Global.urlTrabajadores;

  state = {
    mensaje: "",
    trabajadores: [],
  };

  loadTrabajadores = () => {
    var idHospitales = this.props.idHospitales;
    let data = "";

    for (var id of idHospitales) {
      data += "idhospital=" + id + "&";
    }

    data = data.substring(0, data.length - 1);

    let request = "api/trabajadores/trabajadoreshospitales?" + data;

    axios.get(this.url + request).then((response) => {
      console.log("Obteniendo trabajadores...");

      this.setState({
        trabajadores: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadTrabajadores();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.idHospitales !== this.props.idHospitales) {
      this.loadTrabajadores();
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>Trabajadores</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Salario</th>
              <th>Id Hospital</th>
            </tr>
          </thead>
          <tbody>
            {this.state.trabajadores.map((trabajador, index) => {
              return (
                <tr key={index}>
                  <td>{trabajador.apellido}</td>
                  <td>{trabajador.oficio}</td>
                  <td>{trabajador.salario}</td>
                  <td>{trabajador.idHospital}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
