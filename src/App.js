import "./App.css";
import ServicioApiCustomers from "./components/ServicioApiCustomers";
import ServiceApiSuppliers from "./components/ServiceApiSuppliers";

function App() {
  return (
    <div>
      <ServicioApiCustomers />
      <ServiceApiSuppliers />
    </div>
  );
}

export default App;
