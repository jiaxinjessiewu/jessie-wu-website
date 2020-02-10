import React from "react";
import liveChat from "../assets/live-chat.png";
import tasks from "../assets/task-management.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {
  constructor() {
    super();
    var projects = [
      {
        id: "demo1",
        name: "Warehouse Wars",
        img: liveChat,
        description:
          "A single player game that player needs to avoid and kill all monsters.",
        tech: ["JavaScript", "Node & Express", "SQLlite", "CSS"],
        demo: "https://jessie-angularjs-app.herokuapp.com/",
        github: "https://jessie-angular-livechat.firebaseapp.com/"
      },
      {
        id: "demo2",
        name: "MMMOG version of Warehouse Wars",
        img: liveChat,
        description:
          "Mobile Massively Multiplayer Online Game, that users can choose single player or multiplayer mode that they need to push boxes to kill all monsters.",
        tech: ["JavaScript", "Node & Express", "MongoDB", "WebSocket"],
        demo: "https://jessie-angular-livechat.firebaseapp.com/",
        github: "https://jessie-angular-livechat.firebaseapp.com/"
      },
      {
        id: "demo3",
        name: "Live Chat App",
        img: liveChat,
        description: "A real time chat room application for multiple users",
        tech: ["Angular 2 ", "Firebase", "Bootstrap 4"],
        demo: "https://jessie-angular-livechat.firebaseapp.com/",
        github: "https://jessie-angular-livechat.firebaseapp.com/"
      },
      {
        id: "demo4",
        name: "Task Management App",
        img: tasks,
        description:
          "A MEAN App created for helping users track and manage their to-do tasks",
        tech: ["AngularJS", "Node & Express", "MongoDB", "Bootstrap 4"],
        demo: "https://jessie-angularjs-app.herokuapp.com/",
        github: "https://jessie-angular-livechat.firebaseapp.com/"
      }
    ];

    this.projectsList = projects.map((project, key) => {
      return (
        <div className={"col-12 col-sm-6 col-md-6 col-lg-3"} key={key}>
          <div
            className="project"
            style={{ backgroundImage: "url(" + project.img + ")" }}
          >
            <div className="overlay">
              <div className="text">
                <h3>{project.name}</h3>
              </div>
              <div>
                <button
                  className="project-button"
                  onClick={() => {
                    var modalBG = document.getElementById("gallery-card");
                    var aguaModal = document.getElementById(project.id);
                    modalBG.style.display = "block";
                    aguaModal.style.display = "block";
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });

    this.projectsDemo = projects.map(project => {
      return (
        <div id={project.id} className="modal-card">
          <p
            className="close-icon"
            onClick={() => {
              var modalBG = document.getElementById("gallery-card");
              var marineModal = document.getElementById(project.id);
              modalBG.style.display = "none";
              marineModal.style.display = "none";
            }}
          >
            &times;
          </p>
          <div
            className="visual"
            style={{ backgroundImage: "url(" + project.img + ")" }}
          ></div>
          <div className="modal-info">
            <h3 className="title">{project.name}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="modal-skills">
              <ul>{this.getData(project.tech)}</ul>
            </div>
            <div className="modal-bottom row">
              <div className="col-6 col-sm-6">
                <a href={project.demo} target="_blank">
                  Demo
                </a>
              </div>
              <div className="col-6 col-sm-6">
                <a href={project.github} target="_blank">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  getData(techs) {
    return techs.map(function(tech) {
      return <li key={tech}>{tech}</li>;
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="my-projects" className="container-fluid bg-light section mt-5">
          <div className=" project-container container bg-light">
            <h1 id="projects" className="text-center">
              Projects
            </h1>
            <hr />
            <div className="row my-5">{this.projectsList}</div>
          </div>
        </div>

        {/*hidden modals*/}
        <div id="gallery-card">{this.projectsDemo}</div>
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  bounceIn: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string
};
