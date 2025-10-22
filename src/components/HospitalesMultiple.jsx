import React, { Component } from "react";
import Trabajadores from "./Trabajadores";
import Global from "../Global";
import axios from "axios";

export default class HospitalesMultiple extends Component {
  url = Global.urlTrabajadores;
  selectHospital = React.createRef();
  cajaIncremento = React.createRef();

  state = {
    hospitales: [],
    hospitalesSeleccionados: [],
  };

  loadHospitales = () => {
    var request = "api/hospitales";

    axios.get(this.url + request).then((response) => {
      console.log("Obteniendo hospitales...");
      this.setState({
        hospitales: response.data,
      });
    });
  };

  getHospitalesSeleccionados = (event) => {
    event.preventDefault();
    let aux = [];

    let options = this.selectHospital.current.options;

    for (var option of options) {
      if (option.selected) {
        aux.push(option.value);
      }
    }

    this.setState({
      hospitalesSeleccionados: aux,
    });
  };

  updateSalario = () => {
    var aux = [];
    let options = this.selectHospital.current.options;

    for (var option of options) {
      if (option.selected) {
        aux.push(option.value);
      }
    }

    let data = "";
    data += "incremento=" + this.cajaIncremento.current.value + "&";

    for (var id of aux) {
      data += "idhospital=" + id + "&";
    }

    data = data.substring(0, data.length - 1);

    var request =
      "api/trabajadores/updatesalariotrabajadoreshospitales?" + data;

    axios.put(this.url + request).then((response) => {
      console.log("Incrementado con exito");
    });
  };

  componentDidMount = () => {
    this.loadHospitales();
  };

  render() {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-lg-10 col-xl-8 mx-auto">
            {" "}
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-md-5">
                <h1 className="h3 text-center mb-4">Gestión de Hospitales</h1>

                <form onSubmit={this.getHospitalesSeleccionados}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Hospitales</label>
                        <select
                          size="10"
                          multiple
                          ref={this.selectHospital}
                          className="form-control"
                        >
                          {this.state.hospitales.map((hospital, index) => {
                            return (
                              <option key={index} value={hospital.idHospital}>
                                {hospital.nombre}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          Mostrar trabajadores
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Incremento Salarial
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          ref={this.cajaIncremento}
                          placeholder="Ej: 500"
                        />
                      </div>
                      <div className="d-grid">
                        <button
                          className="btn btn-success btn-lg"
                          type="button"
                          // Has definido la función 'updateSalario',
                          // deberías añadirla al onClick para que funcione:
                          onClick={this.updateSalario}
                        >
                          Incrementar salario
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {this.state.hospitalesSeleccionados.length !== 0 && (
          <div className="mt-4">
            <Trabajadores idHospitales={this.state.hospitalesSeleccionados} />
          </div>
        )}
      </div>
    );
  }
}
