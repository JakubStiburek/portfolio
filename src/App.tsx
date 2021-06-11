import React from 'react';
import './App.css';
import Home from "./components/Home";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home/>
      <hr className="dotted-divider"/>
      <h1 className="disclaimer">WEBSITE UNDER CONSTRUCTION</h1>
      <Stack />
      <hr className="dotted-divider"/>
      <Projects />
      <hr className="dotted-divider"/>
      <Footer />
    </div>
  );
}

export default App;
