import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { FocusStyleManager } from "@blueprintjs/core";

class App extends Component {
  render() {
    FocusStyleManager.onlyShowFocusOnTabs();

    return (
      <div className="App bp3-dark bp3-text-large w-100">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
