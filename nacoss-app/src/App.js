import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Leadership from "./Components/Leadership/Leadership";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Leadership/>
    </Router>
  );
}

export default App;
// Photo by heylagostechie on Unsplash
