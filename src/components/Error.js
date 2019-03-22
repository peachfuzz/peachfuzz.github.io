import React, { Component } from "react";
import { Link } from "react-router-dom";
import peach from "../icons/peachprincess.png";

class Error extends Component {
  render() {
    return (
      <div>
        <h1>The page {window.location.href} does not exist..</h1>
        <Link to="/">Go home?</Link>
        <br />
        <img src={peach} className="peach" alt="Princess Peach from Mario" />
      </div>
    );
  }
}

export default Error;
