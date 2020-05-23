import React from "react";
import liveChat from "../assets/live-chat.png";
import tasks from "../assets/task-management.png";
import wwGame from "../assets/warehouse-wars.png";
import mmmog from "../assets/mmmog.png";
import myPhotoGallery from '../assets/my-photo-gallery.png';
import PropTypes from "prop-types";

export default class Projects extends React.Component {
  constructor() {
    super();
    var projects = [
      {
        id: "demo0",
        name: "My Photo Gallery",
        img: myPhotoGallery,
        description:
          "My-photo-gallery is a photo search application build with Angular framework and Flickr API, " +
          "which also uses ngx-infinite-scroll to load more photos when the user is scrolling down. " +
          "The app also allows users upload and store images in Firebase and " + 
          "use Firebase Realtime Database to see the files that are uploaded in real time.",
        tech: ["TypeScript", "JavaScript ES6s", "Flickr API", "Bootstrap 4", "SASS"],
        demo: "https://my-photo-gallery-e66ad.web.app",
        github: "https://github.com/jiaxinjessiewu/my-photo-gallery"
      },
      {
        id: "demo3",
        name: "Live Chat App",
        img: liveChat,
        description:
          "A chat room application with authentication, using Angular 2, Bootstrap 4 and a Firebase backend. The app is managing state between multiple clients in realtime with Cloud Firestore.",
        tech: ["Angular 2 ", "Firebase", "Bootstrap 4"],
        demo: "https://jessie-angular-livechat.firebaseapp.com/",
        github: "https://github.com/jiaxinjessiewu/anglar-livechat-app"
      },
      {
        id: "demo1",
        name: "Warehouse Wars",
        img: wwGame,
        description:
          "A single player game takes place in a warehouse. " +
          "The player can push rows of boxes, vertically, horizontally or diagonally around the warehouse to surround each monster on all sides and remove them.\n" + 
          "MMMOG version of Warehouse Wars is also available : https://github.com/jiaxinjessiewu/mmmog-warehouse-wars",
        tech: ["JavaScript", "Node & Express", "Sqlite3", "Ajax"],
        demo: "https://warehouse-wars-game.firebaseapp.com",
        github: "https://github.com/jiaxinjessiewu/warehouse-wars-game"
      },
      // {
      //   id: "demo2",
      //   name: "MMMOG version of Warehouse Wars",
      //   img: mmmog,
      //   description:
      //     "Mobile massively multiplayer online game, that users can choose single player or multiplayer mode to kill all monsters together. " +
      //     "The worlds backend communicates with Javascript/JQuery frontend via JSON over websockets.",
      //   tech: ["JavaScript", "Node & Express", "MongoDB", "WebSocket"],
      //   demo: "https://github.com/jiaxinjessiewu/mmmog-warehouse-wars",
      //   github: "https://github.com/jiaxinjessiewu/mmmog-warehouse-wars"
      // },
      {
        id: "demo4",
        name: "Task Management App",
        img: tasks,
        description:
          "A MEAN App created for helping users track and manage their to-do tasks. " +
          "A full stack app to store tasks data, generate tasks from mongoDB, process them through express, and displaying them with angular directives, controllers, and services.",
        tech: ["AngularJS", "Node & Express", "MongoDB", "Bootstrap 4"],
        demo: "https://jessie-angularjs-app.herokuapp.com/",
        github: "https://github.com/jiaxinjessiewu/jessie-angularjs-app"
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
