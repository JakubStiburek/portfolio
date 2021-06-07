import React from 'react';
import './App.css';
import Home from "./components/Home";
import Stack from "./components/Stack";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Home/>
      <hr className="dotted-divider"/>
      <Stack />
      <hr className="dotted-divider"/>
      <Project />
    </div>
  );
}

export default App;
