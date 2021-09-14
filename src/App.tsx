import React from 'react';
import './App.css';
import Home from "./components/Home";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Jobs from "./components/JobTimeline";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Home/>
      <div className="wrapper">
        <h1 className="disclaimer">Website under maintenance! Excuse me.</h1>
      </div>
      {/*<hr className="dotted-divider"/>*/}
      {/*/!*<h1 className="disclaimer">WEBSITE UNDER CONSTRUCTION</h1>*!/*/}
      {/*<Stack />*/}
      {/*<hr className="dotted-divider"/>*/}
      {/*<Jobs />*/}
      {/*<hr className="dotted-divider"/>*/}
      {/*<Projects />*/}
      {/*<hr className="dotted-divider"/>*/}
      <Footer />
    </div>
  );
}

export default App;
