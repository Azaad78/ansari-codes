import React from "react";
import YouTube from "react-youtube";

class HomePage extends React.Component {
  render() {
    return (
      <div className="ui stackable">
        <h1>Please Click "Hire Me" from the Options above!</h1>

        <h2>
          You may also take a look at this short video of my review of my motorcycle.
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
