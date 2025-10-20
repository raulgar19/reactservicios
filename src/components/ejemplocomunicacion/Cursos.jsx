import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";
import Alumnos from "./Alumnos";

export default class Cursos extends Component {
  url = Global.urlCursos;
  selectCursos = React.createRef();

  state = {
    cursos: [],
    idCurso: "",
    alumno: {},
  };

  loadAlumno = (idAlumno) => {
    var request = "api/Alumnos/FindAlumno/" + idAlumno;

    axios(this.url + request).then((response) => {
      this.setState({
        alumno: response.data,
      });
    });
  };

  loadCursos = () => {
    const request = "api/alumnos/cursos";

    axios(this.url + request).then((response) => {
      this.setState({
        cursos: response.data,
      });
    });
  };

  getAlumnos = (event) => {
    event.preventDefault();
    this.setState({
      idCurso: this.selectCursos.current.value,
    });
  };

  componentDidMount = () => {
    this.loadCursos();
  };

  render() {
    return (
      <div>
        <h1>Práctica Cursos</h1>
        <form>
          <label>Selecciona curso: </label>
          <select ref={this.selectCursos}>
            {this.state.cursos.map((curso, index) => (
              <option key={index} value={curso}>
                {curso}
              </option>
            ))}
          </select>
          <button type="button" onClick={this.getAlumnos}>
            Obtener alumnos
          </button>
        </form>

        <div>
          <h1>
            {this.state.alumno.nombre} {this.state.alumno.apellidos}
          </h1>
          <h1>IdAlumno: {this.state.alumno.idAlumno}</h1>
          <img src={this.state.alumno.imagen} alt="" />
        </div>

        <Alumnos idCurso={this.state.idCurso} loadAlumno={this.loadAlumno} />
      </div>
    );
  }
}
