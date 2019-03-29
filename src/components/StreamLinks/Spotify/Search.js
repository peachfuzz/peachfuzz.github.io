import React, { Component } from "react";
import axios from "axios";
import Results from "./Results.js";
import { Divider, InputGroup } from "@blueprintjs/core";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      albums: [],
      artists: [],
      playlists: [],
      tracks: []
    };
    this.searchTrack = this.searchTrack.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }
  handleQueryChange(e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState(
      {
        query: e.target.value
      },
      () =>
        this.searchTrack(
          this.state.query.replace(" ", "%20").replace("%20%20", "%20")
        )
    );
  }
  searchTrack(q) {
    if (q !== "") {
      var url =
        "https://api.spotify.com/v1/search?q=" +
        q +
        "&type=album,artist,playlist,track&limit=10";
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${this.props.token}`
          }
        })
        .then(response => {
          var data = response.data;
          this.setState({
            albums: [data.albums.items],
            artists: [data.artists.imems],
            playlists: [data.playlists.items],
            tracks: [data.tracks.items]
          });
          var loc = window.location.href; // adding query string, idk if it's even worth it
          if (loc.indexOf("&search=") > -1) {
            window.location.href =
              window.location.href.substring(
                0,
                window.location.href.indexOf("&search=") + 8 //replaces the old query string
              ) + q;
          } else {
            window.location.href = window.location.href + "&search=" + q; //adds new query string
          }
        })
        .catch(error => {
          console.log("ERROR!");
          this.setState({
            albums: [],
            artists: [],
            playlists: [],
            tracks: []
          });
        });
    } else {
      this.setState({
        albums: [],
        artists: [],
        playlists: [],
        tracks: []
      });
    }
  }
  componentDidMount() {
    var loc = window.location.href;
    if (loc.indexOf("&search=") > -1) {
      loc = loc.substring(loc.indexOf("&search=") + 8);
      loc = loc.replace("%20", " ");
      this.setState({ query: loc });
    }
  }
  render() {
    return (
      <div className="search">
        <p>
          You can now search by simply typing{" "}
          <span aria-label="fire" role="img">
            🔥
          </span>
        </p>
        <InputGroup
          type="text"
          placeholder="eg: Kendrick Lamar"
          value={this.state.query}
          onChange={this.handleQueryChange}
          leftIcon="music"
          className="center w-300px"
        />
        <br />
        <br />
        <Divider />
        <Results
          albums={this.state.albums}
          artists={this.state.artists}
          playlists={this.state.playlists}
          tracks={this.state.tracks}
        />
      </div>
    );
  }
}

export default Search;
