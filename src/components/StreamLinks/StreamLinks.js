//itunes api //https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
//https://developer.apple.com/documentation/applemusicapi
// todo:
// ! fix hashrouter / spotify api problem
// ? can you just reroute from /#/access_token* to /#/StreamLinks#access_token*
import React, { Component } from "react";
import Search from "./Spotify/Search.js";

class StreamLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
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

  handleLogin() {
    if (this.state.token !== "") {
      this.setState({ loggedIn: true });
      console.log("logged in!");
    } else {
      console.log("token required!");
      const CLIENT_ID = "2b99e55f6fc04b1c82063242856ab33f"; // Your client id
      // const redirect_uri = "https://peachfuzz.dev/StreamLinks"; // to use once we get regular router working
      const redirect_uri = window.location.href; // deployment version
      const url =
        "https://accounts.spotify.com/authorize" +
        "?response_type=token" +
        "&client_id=" +
        encodeURIComponent(CLIENT_ID) +
        "&redirect_uri=" +
        encodeURIComponent(redirect_uri);
      window.location = url;
    }
  }

  render() {
    return (
      <div className="stream-links">
        <h1>Stream links</h1>
        <p>
          Have you ever wanted to send a song to someone but weren't sure if
          they had apple music or spotify? This should give you the ability to
          create links for both apple music and spotify.
        </p>
        <br />
        <input
          type="submit"
          value="Login to Spotify"
          onClick={this.handleLogin}
        />
        {this.state.token ? (
          <Search token={this.state.token} />
        ) : (
          <p>
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
