import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import "./dashcore.min.css";
import "./lib.min.css";
import Contact from "./components/blocks/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blocks/contact" element={<Contact />} />
          <Route path="*" element={<Home to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
