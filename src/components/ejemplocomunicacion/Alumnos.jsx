import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class Alumnos extends Component {
  url = Global.urlCursos;

  state = {
    alumnos: [],
  };

  loadAlumnos = () => {
    if (this.props.idCurso) {
      const request =
        "api/Alumnos/FiltrarCurso/" + parseInt(this.props.idCurso);

      axios(this.url + request).then((response) => {
        this.setState({
          alumnos: response.data,
        });
      });
    }
  };

  componentDidMount = () => {
    this.loadAlumnos();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.idCurso !== this.props.idCurso) {
      this.loadAlumnos();
    }
  }

  render() {
    return (
      <div>
        <h1>Alumnos del curso {this.props.idCurso}</h1>
        <ul>
          {this.state.alumnos.map((alumno, index) => (
            <li key={index}>
              {alumno.nombre} {alumno.apellido}{" "}
              <button onClick={() => this.props.loadAlumno(alumno.idAlumno)}>
                Ver detalles
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
