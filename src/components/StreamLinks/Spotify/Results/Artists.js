import React, { Component } from "react";
import { Divider, Icon } from "@blueprintjs/core";

class Artists extends Component {
  render() {
    var counter = 0;
    var items = this.props.artists.map(ob => {
      //find out why you have to do map here - it's a single element list containing a list with many items
      return (
        <div className="w-100" key={counter}>
          {ob.map(artist => {
            counter++;
            return (
              <div key={counter}>
                <div className="results w-100">
                  <div className="cover-art-image">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={artist.external_urls.spotify}
                    >
                      {artist.images[1] ? (
                        <img
                          src={artist.images[1].url}
                          className="cover-art-image"
                          alt={artist.name + "'s picture"}
                        />
                      ) : (
                        <Icon
                          icon="mugshot"
                          className="cover-art-image"
                          alt={
                            artist.name +
                            " doesn't have a picture, using a default image"
                          }
                          iconSize={100}
                        />
                      )}
                    </a>
                  </div>
                  <div className="tracklist-name">
                    <div className="ellipsis-one-line">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={artist.external_urls.spotify}
                      >
                        <span className="ellipsis-one-line" dir="auto">
                          {artist.name}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <Divider />
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

export default Artists;
