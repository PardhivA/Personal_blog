import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Positions from "./components/Positions";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <body className="Body">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
