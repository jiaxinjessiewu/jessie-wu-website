import React from "react";
import Background from "./background.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Skills from "./skills.jsx";
import Technologies from "./technologies";
import $ from "jquery";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.about = React.createRef();
    this.projects = React.createRef();
    this.contact = React.createRef();
    this.scrolling = this.scrolling.bind(this);
    this.skills = React.createRef();
    this.technologies = React.createRef();
  }
  componentDidMount() {
    $(".collapse-item").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  }

  navEffect() {
    window.addEventListener("scroll", () => {
      var navBar = document.getElementById("navbar");
      var background = document.getElementById("background");
      var domBGRect = background.getBoundingClientRect();
      var scroll_top = document.getElementById("scroll_top");
      if (domBGRect.y <= -domBGRect.height) {
        navBar.classList.add("fade-in-nav");
        navBar.classList.add("nav-bg");
        navBar.classList.remove("bg-transparent");

        scroll_top.classList.remove("fadeOut");
        scroll_top.classList.add("fadeIn");
      }
      if (-domBGRect.height < domBGRect.y) {
        navBar.classList.remove("fade-in-nav");
        navBar.classList.remove("nav-bg");
        navBar.classList.add("bg-transparent");

        scroll_top.classList.add("fadeOut");
        scroll_top.classList.remove("fadeIn");
      }

      var about = document.getElementById("about-me");
      var aboutSkillBar = [...document.getElementsByClassName("progress-bar")];
      var minPixel = about.offsetTop;
      var maxPixel = minPixel + about.scrollHeight;
      if (window.pageYOffset <= maxPixel && window.pageYOffset >= minPixel) {
        aboutSkillBar.forEach(element => {
          element.classList.add("animated");
        });
      }
      if (window.pageYOffset > maxPixel || window.pageYOffset < minPixel) {
        aboutSkillBar.forEach(element => {
          element.classList.remove("animated");
        });
      }
    });
  }

  scrolling(instance) {
    let node = document.getElementById(instance.current.props.id);
    window.scrollTo({
      top: node.offsetTop - 10,
      behavior: "smooth"
    });
  }
  scrolling_bottom() {
    let footer = document.getElementById("footer");
    window.scrollTo({
      top: footer.offsetTop,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div id="top">
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top"
        >
          <div className="container">
            <a
              className="home-style navbar-brand"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              }}
            >
              Back to Top
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#nav_bar_collapase"
              aria-controls="nav_bar_collapase"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="nav_bar_collapase">
              <div className="navbar-nav">
                <a
                  className="collapse-item"
                  onClick={() => {
                    this.scrolling(this.about);
                  }}
                  className="btn-style nav-item nav-link"
                >
                  About
                </a>
                <a
                  className="collapse-item"
                  onClick={() => {
                    this.scrolling(this.skills);
                  }}
                  className="btn-style nav-item nav-link"
                >
                  Skills
                </a>
                <a
                  className="collapse-item"
                  onClick={() => {
                    this.scrolling(this.technologies);
                  }}
                  className="btn-style nav-item nav-link"
                >
                  Technology
                </a>
                <a
                  className="collapse-item"
                  onClick={() => {
                    this.scrolling(this.projects);
                  }}
                  className="btn-style nav-item nav-link"
                >
                  Projects
                </a>
                <a
                  className="collapse-item"
                  onClick={() => {
                    this.scrolling_bottom();
                  }}
                  className="btn-style nav-item nav-link"
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
        </nav>
        <Background
          ref={this.navEffect}
          id="background"
          aboutRef={this.about}
        />

        <About ref={this.about} id="about-me" onScroll="this.handleScroll()" />
        <Skills ref={this.skills} id="skills" onScroll="this.handleScroll()" />
        <Technologies
          ref={this.technologies}
          id="technologies"
          onScroll="this.handleScroll()"
        />
        <Projects ref={this.projects} id="my-projects" />

        <a
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }}
          id="scroll_top"
          className="back-to-top animated fadeOut"
        >
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    );
  }
}

export default Navbar;
