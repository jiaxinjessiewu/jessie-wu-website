import React from "react";
import PropTypes from "prop-types";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default class Technologies extends React.Component {
  constructor() {
    super();
    var technology_list = [
      { tech: "Angular", value: "70" },
      { tech: "React", value: "50" },
      { tech: "Node", value: "60" },
      { tech: "SQL", value: "60" },
      { tech: "NoSQL", value: "50" },
      { tech: "Python", value: "60" },
      { tech: "Java", value: "50" },
      { tech: "Git", value: "60" }
    ];
    this.technologyList = technology_list.map((tech, i) => {
      return (
        <div className="col-4 col-sm-3 col-md-3 col-lg-3 circle-row" key={i}>
          <CircularProgressbar
            value={tech.value}
            text={tech.tech}
            strokeWidth="15"
          ></CircularProgressbar>
        </div>
      );
    });
  }
  render() {
    return (
      <div
        id="technologies"
        className="container-fluid section tech-sec text-center mt-5"
      >
        <div className="container ">
          <h1 className={this.props.bounceLeft}>Technologies</h1>
          <hr />
          <div className="row ">{this.technologyList}</div>
        </div>
      </div>
    );
  }
}

Technologies.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string
};
