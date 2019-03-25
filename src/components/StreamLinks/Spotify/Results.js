import React, { Component } from "react";

class Results extends Component {
  render() {
    var counter = 0;
    var items = this.props.tracks.map(ob => {
      //find out why you have to do map here - it's a single element list containing a list with many items
      return (
        <div className="results" key={counter}>
          {ob.map(track => {
            counter++;
            // var artists = track["artists"]; // if we ever want to do multiple artists
            return (
              <div
                className="track-name-wrapper tracklist-top-align next-line"
                key={counter}
              >
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={track["album"]["external_urls"]["spotify"]}
                >
                  <img
                    src={track["album"]["images"][1]["url"]}
                    className="cover-art-image cover-art-image-loaded"
                    alt={track["name"] + "'s album art"}
                  />
                </a>
                <div
                  className="tracklist-name ellipsis-one-line"
                  value={counter}
                  key={counter}
                >
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={track["external_urls"]["spotify"]}
                  >
                    <span
                      className="TrackListRow__artists ellipsis-one-line"
                      dir="auto"
                    >
                      {track["name"]}
                      {track["explicit"] === true ? (
                        <span className="TrackListRow__explicit-label">
                          Explicit
                        </span>
                      ) : (
                        <span />
                      )}
                    </span>
                  </a>
                </div>
                <div className="tracklist-name ellipsis-one-line">
                  <span
                    className="TrackListRow__artists ellipsis-one-line"
                    dir="auto"
                  >
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={track["artists"][0]["external_urls"]["spotify"]}
                    >
                      {track["artists"][0]["name"]}
                    </a>
                    {/* if we ever care to show all artists
                    {artists.map(items => {
                      return (
                        <a
                          rel="noopener noreferrer" target="_blank" href={track["artists"][0]["external_urls"]["spotify"]}
                        >
                          {track["artists"][0]["name"] + ", "}
                        </a>
                      );
                    })} */}
                  </span>
                </div>
                <div className="tracklist-name ellipsis-one-line">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={track["album"]["external_urls"]["spotify"]}
                  >
                    {track["album"]["name"]}
                  </a>
                </div>
                <br />
              </div>
            );
          })}
        </div>
      );
    });
    if (items !== []) return <>{items}</>;
    else return <div />;
  }
}

export default Results;
