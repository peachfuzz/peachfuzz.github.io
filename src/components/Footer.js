import React, { Component } from "react";
import "../App.css";
import github from "../icons/icon-github.png";
import instagram from "../icons/icon-instagram.png";
import linkedin from "../icons/icon-linkedin.png";

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <h4>Connect With me</h4>
        <ul className="social-media-links">
          <li>
            <a
              href="https://github.com/peachfuzz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github" className="icon-github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/somemehican"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="icon-instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hdm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="icon-linkedin" />
            </a>
          </li>
        </ul>
        <p className="small-text">
          This website was made possible with{" "}
          <a href="reactjs.org" target="_blank" rel="noopener noreferrer">
            React
          </a>{" "}
          and{" "}
          <a
            href="https://pages.github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Pages
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
