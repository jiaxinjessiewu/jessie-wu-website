import React from "react";
import PropTypes from "prop-types";
// import "../customization.css";

export default class Skills extends React.Component {
  skillBarAnimated() {
    console.log("skillBarAnimated");
  }
  render() {
    return (
      <div
        id="skills"
        className="container-fluid section bg-light text-center skills-sec mt-5"
      >
        <div className="container ">
          <h1 className={this.props.bounceLeft}>Skills</h1>
          <hr />
          <div className="row">
            <div className="col-6 col-sm-4">
              <img className="skills-img" src={require("../assets/code.svg")} />

              <p>Full Stack Development and RESTful Design</p>
            </div>

            <div className="col-6 col-sm-4">
              <img
                className="skills-img"
                src={require("../assets/adwords.svg")}
              />

              <p>Google AdWords Development and SEO</p>
            </div>
            <div className="col-6 col-sm-4">
              <img
                className="skills-img"
                src={require("../assets/agile.svg")}
              />

              <p>Agile software development practices(Scrum) & Waterfall</p>
            </div>

            <div className="col-6 col-sm-4">
              <img className="skills-img" src={require("../assets/ab.svg")} />

              <p>Manual / Unit Testing</p>
            </div>
            <div className="col-6 col-sm-4">
              <img className="skills-img" src={require("../assets/team.svg")} />

              <p>Ability to work cohesively with others</p>
            </div>

            <div className="col-6 col-sm-4">
              <img className="skills-img" src={require("../assets/tree.svg")} />

              <p>Always keep learning and growing</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string
};
