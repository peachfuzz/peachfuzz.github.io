import React, { Component } from "react";
import { Tabs, Tab } from "@blueprintjs/core";
import Albums from "./Albums";
import Artists from "./Artists";
import Playlists from "./Playlists";
import Tracks from "./Tracks";

// shortcuts ex
// https://blueprintjs.com/docs/#select/omnibar
// https://github.com/palantir/blueprint/blob/develop/packages/docs-app/src/examples/select-examples/omnibarExample.tsx

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: 0 //0 = tracks, 1 = artists, 2 = albums, 3 = playlist
    };
    this.chooseRender = this.chooseRender.bind(this);
  }
  chooseRender(r) {
    this.setState({ render: r });
  }

  render() {
    return (
      <div className="w-100">
        <Tabs>
          <Tab
            id="albums"
            title="Albums"
            panel={<Albums albums={this.props.albums} />}
          />
          <Tab
            id="artists"
            title="Artists"
            panel={<Artists artists={this.props.artists} />}
          />
          <Tab
            id="playlists"
            title="Playlists"
            panel={<Playlists playlists={this.props.playlists} />}
          />
          <Tab
            id="tracks"
            title="Tracks"
            panel={<Tracks tracks={this.props.tracks} />}
          />
        </Tabs>
      </div>
    );
  }
}

export default Results;
