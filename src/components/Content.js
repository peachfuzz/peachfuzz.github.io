import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import EuclidAlg from "./EuclidAlg";
import EuclidAlgUgly from "./EuclidAlgUgly";
import StreamLinks from "./StreamLinks/StreamLinks";
import Error from "./Error";
import "../App.css";

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <div className="content">
          <div className="inner-content">
            <h2>Personal Projects</h2>
            <Link to="/">Home</Link>
            <br />
            <Link to="/EuclidAlg">Euclidean Algorithm</Link>
            <br />
            <Link to="/EuclidAlgUgly">Euclidean Algorithm(Ugly code)</Link>
            <br />
            <Link to="/StreamLinks">
              Apple Music and Spotify Link Generator
            </Link>
            <br />
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                component={Home}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/EuclidAlg`}
                component={EuclidAlg}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/EuclidAlgUgly`}
                component={EuclidAlgUgly}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/StreamLinks`}
                component={StreamLinks}
              />
              <Route path={process.env.PUBLIC_URL + "*"} component={Error} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Content;
