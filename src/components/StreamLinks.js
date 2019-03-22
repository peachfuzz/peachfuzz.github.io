//itunes api //https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
//https://developer.apple.com/documentation/applemusicapi
//spotify api //GET https://api.spotify.com/v1/search
import React, { Component } from "react";
import axios from "axios";

class StreamLinks extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
    this.search = this.search.bind(this);
  }

  search(e) {
    e.preventDefault();
    const SPOTIFY_BASE_LINK =
      "https://api.spotify.com/v1/search?q=" +
      document.getElementById("search").value.replace(" ", "%20") +
      "&type=artist";
    axios.get(SPOTIFY_BASE_LINK).then(res => {
      const results = res.data;
      this.setState(
        {
          results
        },
        () => {
          console.log(this.state.results);
          console.log(SPOTIFY_BASE_LINK);
        }
      );
    });
  }

  // curl -X "GET" "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCQJ55SsyV-IWC6CB8ATpO2KNKLoIxRBJn7GD0TG9fENHgXQ_l50lyGFlQ07wkvCVUbXPuL8NcLppJsUCiWB6pM934GeGtwlqLbEIghOK7zmvCUWszrDYkQkiGkWj61erJ7oUFl77GZvJOM_ADmApShZlkqIYnVlg"
  //var client_id = ‘CLIENT_ID’; // Your client id
  //var client_secret = ‘CLIENT_SECRET’; // Your secret
  //https://medium.com/@jonnykalambay/now-playing-using-spotifys-awesome-api-with-react-7db8173a7b13
  render() {
    var name;
    if (this.state.results.length !== 0) {
      // name = <li>{this.state.results.artists.items[0].name}</li>
      name = this.state.results.artists.items.map(item => (
        <li key={item.name}>{item.name}</li>
      ));
    }

    return (
      <div className="home">
        <p>Steam links</p>
        <p>
          Have you ever wanted to send a song to someone but weren't sure if
          they had apple music or spotify? This should give you the ability to
          create links for both apple music and spotify.
        </p>
        <form onSubmit={this.search}>
          <input type="text" id="search" />
          <input type="button" value="search" onClick={this.search} />
        </form>
        <div id="results">
          <ul>{name}</ul>
        </div>
      </div>
    );
  }
}

export default StreamLinks;
