import axios from "axios";
import React, { Component } from "react";
import Global from "../Global";

export default class ServiceApiSuppliers extends Component {
  urlSuppliers = Global.urlNorthWind;
  cajaId = React.createRef();

  state = {
    proveedores: [],
    supplier: null,
  };

  loadSuppliers = () => {
    var request = "suppliers";
    axios.get(this.urlSuppliers + request).then((response) => {
      console.log("Leyendo...");
      this.setState({
        proveedores: response.data.value,
      });
    });
  };

  findSupplierId = (event) => {
    var request = "suppliers";
    event.preventDefault();
    let idSupplier = parseInt(this.cajaId.current.value);
    axios.get(this.urlSuppliers + request).then((response) => {
      console.log("Buscando...");

      for (var supplier of response.data.value) {
        if (supplier.SupplierID === idSupplier) {
          this.setState({
            supplier: supplier,
          });
          break;
        }
      }
    });
  };

  componentDidMount = () => {
    this.loadSuppliers();
  };

  render() {
    return (
      <div>
        <h1>Service Api Suppliers</h1>
        <form>
          <label>Buscar ID</label>
          <input type="number" ref={this.cajaId} />
          <button onClick={this.findSupplierId}>Buscar</button>
        </form>
        {this.state.supplier && (
          <div>
            <h2>Proveedor seleccionado:</h2>
            <p>
              <strong>Company:</strong> {this.state.supplier.CompanyName}
            </p>
            <p>
              <strong>Contact:</strong> {this.state.supplier.ContactName}
            </p>
            <p>
              <strong>ID:</strong> {this.state.supplier.SupplierID}
            </p>
          </div>
        )}
        <ul>
          {this.state.proveedores.map((supplier, index) => {
            return <li key={index}>{supplier.ContactName}</li>;
          })}
        </ul>
      </div>
    );
  }
}
