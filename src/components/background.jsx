import React from "react";
import PropTypes from "prop-types";

export default class Background extends React.Component {
  render() {
    return (
      <div id="background" className="background background-2">
        <div className="top-container flex">
          <h1 className="bg-intro animated bounceInDown">
            Hello, I'm Jessie Wu
          </h1>
        </div>
      </div>
    );
  }
}

Background.propTypes = {
  aboutRef: PropTypes.object,
  bounceIn: PropTypes.string
};
