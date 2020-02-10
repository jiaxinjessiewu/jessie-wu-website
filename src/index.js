import React from "react";
import ReactDOM from "react-dom";
import "./customization.css";

//adding my imports
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.scss";
// import "./styles/animate.min.css";

ReactDOM.render(
  <React.Fragment>
    <Navbar />
    <Footer />
  </React.Fragment>,
  document.getElementById("root")
);
