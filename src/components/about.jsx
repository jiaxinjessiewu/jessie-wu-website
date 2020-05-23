import React from "react";
import PropTypes from "prop-types";

export default class About extends React.Component {
  skillBarAnimated() {
    console.log("skillBarAnimated");
  }
  render() {
    return (
      <div
        id="about-me"
        className="content-containers section container text-center mt-5"
      >
        <h1 id="about" className={this.props.bounceLeft}>
          About Me
        </h1>
        <hr />
        <div className="row intro">
          <div className="col-sm-8 col-sm-offset-2 text-left">
            <p>
              I'm Jessie, a full stack web developer with industry and startup
              experience, enjoying the creative and intuitive aspect of front
              end and the pragmatic logic of back end.
            </p>
            <p>
              As a career driven and ambitious developer, I consider myself a
              professional with passion for developing applications with MEAN
              stack and experience in multiple programming languages.
            </p>
            <p>
              I specialize in Javascript and modern Javascript technologies
              including Node.js, AngularJS, Angular 2+ and ReactJS.
            </p>
            <p>
              If you want to hire me or just to talk, 
              {" "}
              <a className="js-connect" href="#footer">
                contact
              </a>
              {" "}
              with me.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string
};
