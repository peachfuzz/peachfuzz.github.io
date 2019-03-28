import React, { Component } from "react";
import "../App.css";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <h4>Connect With me</h4>
        <ul className="social-media-links">
          <li>
            <a
              href="https://www.instagram.com/somemehican"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram
                alt="Instagram"
                className="icon-instagram"
                size={50}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/peachfuzz"
              target="_blank"
              rel="noopener noreferrer"
              className="cont"
            >
              <IoLogoGithub alt="Github" className="icon-github" size={50} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hdm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin
                alt="LinkedIn"
                className="icon-linkedin"
                size={50}
              />
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
