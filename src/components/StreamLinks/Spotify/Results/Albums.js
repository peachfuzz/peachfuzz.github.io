import React, { Component } from "react";
import { Divider } from "@blueprintjs/core";

class Albums extends Component {
  render() {
    var counter = 0;
    var items = this.props.albums.map(ob => {
      //find out why you have to do map here - it's a single element list containing a list with many items
      return (
        <div className="w-100" key={counter}>
          {ob.map(album => {
            counter++;
            return (
              <div key={counter}>
                <div className="results w-100">
                  <div className="cover-art-image">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={album["external_urls"]["spotify"]}
                    >
                      <img
                        src={album["images"][0]["url"]}
                        className="cover-art-image"
                        alt={album["name"] + "'s album art"}
                      />
                    </a>
                  </div>
                  <div className="tracklist-name">
                    <div className="ellipsis-one-line">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={album["external_urls"]["spotify"]}
                      >
                        <span className="ellipsis-one-line" dir="auto">
                          {album["name"]}
                        </span>
                      </a>
                    </div>
                    <div className="ellipsis-one-line">
                      <span className="ellipsis-one-line" dir="auto">
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={album["artists"][0]["external_urls"]["spotify"]}
                        >
                          {album["artists"][0]["name"]}
                        </a>
                        {/* if we ever care to show all artists
                          {artists.map(items => {
                            return (
                              <a rel="noopener noreferrer" target="_blank" href={album["artists"][0]["external_urls"]["spotify"]}>
                                {album["artists"][0]["name"] + ", "}
                              </a>
                            );
                          })} */}
                      </span>
                    </div>
                    <div className="ellipsis-one-line">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={album["external_urls"]["spotify"]}
                      >
                        {album["name"]}
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

export default Albums;