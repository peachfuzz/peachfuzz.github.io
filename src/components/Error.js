import React, { Component } from "react";
import { Link } from "react-router-dom";
import peach from "../icons/peachprincess.png";
import { H1 } from "@blueprintjs/core";

class Error extends Component {
  render() {
    return (
      <div className="top">
        <H1>The page {window.location.href} does not exist..</H1>
        <Link to="/">Go home?</Link>
        <br />
        <img src={peach} className="peach" alt="Princess Peach from Mario" />
      </div>
    );
  }
}

export default Error;
