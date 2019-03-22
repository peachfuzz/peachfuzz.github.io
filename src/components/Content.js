import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import EuclidAlg from "./EuclidAlg";
import EuclidAlgUgly from "./EuclidAlgUgly";
import SteamLinks from "./StreamLinks";
import "../App.css";

class Content extends Component {
  constructor(props) {
    super(props);
    const NaviItems = [];
    const links = ["/", "EuclidAlg"];
    const pages = ["Home", "Euclidean Algorithm"];
    for (let i = 0; i < links.length; i++) {
      NaviItems.push({
        page: pages[i],
        link: links[i]
      });
    }
    this.state = { NaviItems };
  }

  render() {
    return (
      <HashRouter>
        <div className="content">
          <div className="inner-content">
            <h2>Personal Projects</h2>
            <Link to="/">Home</Link>
            <br />
            <Link to="/EuclidAlg">Euclidean Algorithm</Link>
            <br />
            <Link to="/EuclidAlgUgly">Euclidean Algorithm(Ugly code)</Link>
            <br />
            <Link to="/SteamLinks">Apple Music and Spotify Link Generator</Link>
            <br />
            <Route exact path="/" component={Home} />
            <Route path="/EuclidAlg" component={EuclidAlg} />
            <Route path="/EuclidAlgUgly" component={EuclidAlgUgly} />
            <Route path="/SteamLinks" component={SteamLinks} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Content;
