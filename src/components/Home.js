import React, { Component } from "react";
import me from "../icons/me.png";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>My garden</h1>
        <img src={me} className="me" alt="Me, Hector, at Zion National Park." />
        <p className="small-text">This is me at Zion National Park</p>
        <p>
          Hello! Welcome to my little slice of the internet. This is my garden
          that I intend to fill with little side projects. Stay tuned for more
          features to be added!
        </p>
      </div>
    );
  }
}

export default Home;
