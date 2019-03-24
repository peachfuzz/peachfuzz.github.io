import React, { Component } from "react";
import axios from "axios";
import Results from "./Results.js";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      result: false,
      albums: [],
      artists: [],
      playlists: [],
      tracks: []
    };
    this.searchTrack = this.searchTrack.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }
  handleQueryChange(event) {
    this.setState({
      query: event.target.value
    });
  }
  searchTrack(e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    var q = this.state.query.replace(" ", "%20");
    q = q.replace("%20%20", "%20");
    var url =
      "https://api.spotify.com/v1/search?q=" +
      q +
      "&type=album,artist,playlist,track&limit=10";
    this.setState({ result: false });
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${this.props.token}`
        }
      })
      .then(response => {
        var data = response.data;
        this.setState({
          result: true,
          albums: [data.albums.items],
          artists: [data.artists.imems],
          playlists: [data.playlists.items],
          tracks: [data.tracks.items]
        });
      })
      .catch(error => {
        console.log("ERROR!");
        this.setState({ result: false });
      });
  }
  render() {
    return (
      <div className="search">
        <p>You can now search :)</p>
        <form>
          <input
            type="text"
            placeholder="eg: Kendrick Lamar"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
          <input type="submit" value="Search" onClick={this.searchTrack} />
          <Results tracks={this.state.tracks} />
        </form>
      </div>
    );
  }
}

export default Search;
