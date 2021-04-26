import React from "react";
import YouTube from "react-youtube";

class HomePage extends React.Component {
  render() {
    return (
      <div className="ui stackable">
        <h1>Before you start.</h1>

        <h2>
          Please take a look at this short video of my review of my motorcycle.
        </h2>

        <YouTube
          className="ui stackable container"
          videoId="F008ZPd6xhg"
          opts={{
            height: "400"
          }}
          onReady={this._onReady}
        />
      </div>
    );
  }
}

export default HomePage;
