import React from "react";
import PropTypes from "prop-types";
// import "../customization.css";

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
        {/* <div className="row mt-5" style={{ display: "none" }}>
          <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
            <img src={layers} alt="" />
            <h4>Responsive</h4>
          </div>
          <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
            <img src={pen} alt="" />
            <h4>Design</h4>
          </div>
          <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight}>
            <img src={cogwheel} alt="" />
            <h4>Performance</h4>
          </div>
          s
          <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight}>
            <img src={browser} alt="" />
            <h4>Agile</h4>
          </div>
        </div> */}

        <div className="row intro">
          <div className="col-sm-8 col-sm-offset-2 text-left">
            {/* <img
              className={"img-fluid " + this.props.fadeIn}
              src={myPhoto}
              alt="Jessie Wu"
              style={{
                borderRadius: 50 + "%",
                height: 80 + "%",
                width: 80 + "%"
              }}
            /> */}
            {/* <p className={"mytext pt-3 " + this.props.fadeIn}>
              I love to transform ideas into reality using code. I am passionate
              about using Javascript and animations to create awesome user
              experiences.
            </p> */}

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
          {/* <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
            <div className="skill-process mb-3">
              <div className="progress-bar fill-80-bar">HTML5</div>
            </div>
            <div className="skill-process mb-3">
              <div className="progress-bar fill-80-bar">CSS3</div>
            </div>
            <div className="skill-process mb-3">
              <div className="progress-bar fill-90-bar">Javascript</div>
            </div>
            <div className="skill-process mb-3">
              <div className="progress-bar fill-60-bar">PHP</div>
            </div>
            <div className="skill-process mb-3">
              <div className="progress-bar fill-90-bar">AngularJS</div>
            </div>
            <div className="skill-process mb-3">
              <div className="progress-bar fill-80-bar">ReactJS</div>
            </div>
            <div className="skill-process mb-3">
              <div className="progress-bar fill-60-bar">NodeJs</div>
            </div>
            <div className="skill-process mb-3">
              <div className="progress-bar fill-70-bar">SASS</div>
            </div>
            <div className="skill-process mb-3">
              <div className="progress-bar fill-60-bar">JQuery</div>
            </div>
          </div> */}
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
