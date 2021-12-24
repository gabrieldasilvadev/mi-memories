import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./pages/Routes";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes/>
      </Router>
    </div>
  );
}

export default App;
