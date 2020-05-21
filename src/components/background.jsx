import React from "react";
import PropTypes from "prop-types";

export default class Background extends React.Component {
  render() {
    return (

    //   <div className="waveWrapper waveAnimation">
    //   <div className="waveWrapperInner bgTop">
    //     <div className="wave waveTop" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
    //   </div>
    //   <div className="waveWrapperInner bgMiddle">
    //     <div className="wave waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}}></div>
    //   </div>
    //   <div className="waveWrapperInner bgBottom">
    //     <div className="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}}></div>
    //   </div>
    // </div>

      <div id="background" className="background background-2">
        <div className="top-container flex">
          <h1 className="bg-intro animated bounceInDown">
            Hello, I'm Jessie Wu
          </h1>
        </div>
        <div className="waveWrapperInner bgTop">
            <div className="wave waveTop" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}}></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}}></div>
          </div>
      </div>
    );
  }
}

Background.propTypes = {
  aboutRef: PropTypes.object,
  bounceIn: PropTypes.string
};
