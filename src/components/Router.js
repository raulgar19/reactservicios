import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TablaMultiplicar from "./TablaMultiplicar";
import Collatz from "./Collatz";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";
import Menurutas from "./Menurutas";

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
      let { minumero } = useParams();
      return <TablaMultiplicar numero={minumero} />;
    }

    function CollatzElement() {
      let { minumero } = useParams();
      return <Collatz numero={minumero} />;
    }

    return (
      <BrowserRouter>
        <Menurutas />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tabla/:minumero"
            element={<TablaMultiplicarElement />}
          />
          <Route path="/collatz/:minumero" element={<CollatzElement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
