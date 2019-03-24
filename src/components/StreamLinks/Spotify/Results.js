import React, { Component } from "react";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idk: ""
    };
  }
  render() {
    var counter = 0;
    var items = this.props.tracks.map(ob => {
      //find out why you have to do map here - it's a single element list containing a list with many items
      return (
        <div className="results" key={counter}>
          {ob.map(track => {
            counter++;
            return (
              <div
                className="track-name-wrapper tracklist-top-align next-line"
                key={counter}
              >
                <img
                  src={track["album"]["images"][1]["url"]}
                  className="cover-art-image cover-art-image-loaded"
                  alt={track["name"] + "'s album art"}
                />
                <div
                  className="tracklist-name ellipsis-one-line"
                  value={counter}
                  key={counter}
                >
                  {track["name"]}
                </div>
                <div className="tracklist-name ellipsis-one-line">
                  <span
                    className="TrackListRow__artists ellipsis-one-line"
                    dir="auto"
                  >
                    {track["explicit"] === true ? (
                      <span className="TrackListRow__explicit-label">
                        Explicit
                      </span>
                    ) : (
                      <span />
                    )}
                    {track["artists"][0]["name"]}, {track["album"]["name"]}
                  </span>
                </div>
                <br />
              </div>
            );
          })}
        </div>
      );
    });
    return <>{items}</>;
  }
}

export default Results;
