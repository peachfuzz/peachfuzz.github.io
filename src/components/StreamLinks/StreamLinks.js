//itunes api //https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
//https://developer.apple.com/documentation/applemusicapi
//spotify api //GET https://api.spotify.com/v1/search
import React, { Component } from "react";
import Playlist from "./Spotify/Playlist.js";

class StreamLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    if (this.state.token !== "") {
      this.setState({ loggedIn: true });
      console.log("logged in!");
    } else {
      console.log("token required!");
      const CLIENT_ID = "2b99e55f6fc04b1c82063242856ab33f"; // Your client id
      // const CLIENT_SECRET = "13dc08c45b9749fb80e80d945e0951c3"; // Your secret
      const redirect_uri = "https://peachfuzz.dev/StreamLinks";

      const url =
        "https://accounts.spotify.com/authorize" +
        "?response_type=token" +
        "&client_id=" +
        encodeURIComponent(CLIENT_ID) +
        //  + '&scope=${encodeURIComponent(scope)}'
        "&redirect_uri=" +
        encodeURIComponent(redirect_uri);
      //  " '&state=${encodeURIComponent(state)};'
      window.location = url;
      // after user accepts prompt, call api
    }
  }

  render() {
    return (
      <div className="home">
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
        <Playlist />
      </div>
    );
  }
}

export default StreamLinks;
