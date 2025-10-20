import "./App.css";
import ServicioApiCustomers from "./components/ServicioApiCustomers";
import ServiceApiSuppliers from "./components/ServiceApiSuppliers";
import EmpleadosDepartamento from "./components/EmpleadosDepartamento";
import EmpleadosOficios from "./components/EmpleadosOficios";
import Departamentos from "./components/maestrodetalle/Departamentos";
import Cursos from "./components/ejemplocomunicacion/Cursos";

function App() {
  return (
    <div>
      {/*<ServicioApiCustomers />
      <ServiceApiSuppliers />
      <EmpleadosDepartamento />
      <EmpleadosOficios />
      <Departamentos />*/}
      <Cursos />
    </div>
  );
}

export default App;
