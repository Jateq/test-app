import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppFooter from "./AppFooter";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import "./index.css";

import { createRoot } from "react-dom/client";
 
class App extends Component {
  render() {
    const myProps = {
      title: "Jateq's cool app!",
      subject: "Golang",
      number: "First assignment"
    }

      return (
        <div className="app">
          <AppHeader {...myProps}/>
          <AppContent />
          <AppFooter />
        </div>
      );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
// createRoot(document.getElementById("root")).render(<App />);


console.log("I am running!") 