import "./App.css";
import ServicioApiCustomers from "./components/ServicioApiCustomers";
import ServiceApiSuppliers from "./components/ServiceApiSuppliers";
import EmpleadosDepartamento from "./components/EmpleadosDepartamento";
import EmpleadosOficios from "./components/EmpleadosOficios";

function App() {
  return (
    <div>
      {/*<ServicioApiCustomers />
      <ServiceApiSuppliers />
      <EmpleadosDepartamento />*/}
      <EmpleadosOficios />
    </div>
  );
}

export default App;
