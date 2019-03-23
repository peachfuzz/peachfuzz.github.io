import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import EuclidAlg from "./EuclidAlg";
import EuclidAlgUgly from "./EuclidAlgUgly";
import SteamLinks from "./StreamLinks/StreamLinks";
import Error from "./Error";
import "../App.css";

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/EuclidAlg" component={EuclidAlg} />
              <Route path="/EuclidAlgUgly" component={EuclidAlgUgly} />
              <Route path="/SteamLinks" component={SteamLinks} />
              <Route path="*" component={Error} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Content;
