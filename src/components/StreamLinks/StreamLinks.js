//itunes api //https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
//https://developer.apple.com/documentation/applemusicapi
// ! can't use axios bc it's client side and request needs to be server side
// ! https://stackoverflow.com/questions/28389699/access-control-allow-origin-denied-spotify-api
import React, { Component } from "react";
import Search from "./Spotify/Search.js";
import { IoIosMusicalNotes } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { Button, H1, Divider } from "@blueprintjs/core";

class StreamLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  //handles the redirect from spotify
  handleRedirect() {
    var access_token = window.location.href;

    if (access_token.includes("access_token")) {
      access_token = access_token.substring(
        access_token.indexOf("access_token") + 13 //gets rid of "access_token="
      );
      access_token = access_token.substring(
        0,
        access_token.indexOf("&token_type=") //gets rid of &token_type=Bearer&expires_in=3600
      );
      this.setState({
        token: access_token
      });
    } else {
      this.setState({
        token: ""
      });
    }
  }
  componentDidMount() {
    this.handleRedirect();
  }

  handleLogin() {
    const CLIENT_ID = "2b99e55f6fc04b1c82063242856ab33f"; // Your client id
    // const redirect_uri = "https://peachfuzz.dev/StreamLinks"; // to use once we get regular router working
    // if you want to use Client Credentials Flow, secret and backend is required
    const redirect_uri =
      window.location.protocol +
      "//" +
      window.location.host +
      "/#/StreamLinks#";
    const url =
      "https://accounts.spotify.com/authorize" +
      "?response_type=token" +
      "&client_id=" +
      encodeURIComponent(CLIENT_ID) +
      "&redirect_uri=" +
      encodeURIComponent(redirect_uri);
    window.location = url;
  }
  render() {
    return (
      <div className="stream-links top">
        <H1>Stream links</H1>
        <IoIosMusicalNotes alt="Music note" className="icon-music" size={50} />
        <p>
          Have you ever wanted to send a song to someone but weren't sure if
          they had apple music or spotify? This should give you the ability to
          create links for both apple music and spotify.
        </p>
        <div className="top">
          <p>
            Search without login{" "}
            <a href="https://applesandspots.herokuapp.com/">here</a>
          </p>
        </div>
        <br />
        <Button
          type="submit"
          text="Login to Spotify"
          rightIcon={<FaSpotify />}
          intent="success"
          onClick={this.handleLogin}
        />
        {this.state.token ? (
          <Search token={this.state.token} />
        ) : (
          <p>
            <br />
            you need to login first to search{" "}
            <span role="img" aria-label="grimmacing">
              😬
            </span>
          </p>
        )}
      </div>
    );
  }
}

export default StreamLinks;
