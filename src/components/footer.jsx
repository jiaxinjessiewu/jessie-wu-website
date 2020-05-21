import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import resume from "../assets/Jiaxin_Wu_resume.pdf";

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="container-fluid text-center">
        <div className="container">
          <table className="contact-table">
            <tbody>
              <tr>
                <td>
                  <a className="px-3" href={resume} target="_blank">
                    <i className="fa fa-file fa-2x icon-cog"></i>
                  </a>
                </td>
                <td>
                  <a
                    className="px-3"
                    href="mailto:jiaxinwu602@gmail.com"
                    target="_blank"
                  >
                    <i className="fa fa-envelope fa-2x icon-cog"></i>
                  </a>
                </td>
                <td>
                  <a
                    className="px-3"
                    href="https://www.linkedin.com/in/jiaxin-wu-17b3b815a/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square fa-2x icon-cog"></i>
                  </a>
                </td>
                <td>
                  <a
                    className="px-3"
                    href="https://github.com/jiaxinjessiewu/"
                    target="_blank"
                  >
                    <i className="fa fa-github fa-2x icon-cog"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h6 className="pt-4">Jessie Wu &copy; 2020</h6>
        </div>
      </div>
    );
  }
}
