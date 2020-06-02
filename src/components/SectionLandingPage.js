import React, { Component } from "react";
import myAvatar from "../myAvatar.svg";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import BelaIcon from "../assets/BelaIcon.gif";

class SectionLandingPage extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="section section-pink">
        <div className="section-content-landing" id={id}>
          <img className="myAvatar" src={BelaIcon} alt="bela-avatar"></img>
          <ul className="accounts">
            <a href="https://github.com/bsinoimeri" className="btn-github">
              <FontAwesomeIcon icon={faGithub} size="4x" />
            </a>
            <Link
              className="btn-email"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <FontAwesomeIcon icon={faEnvelope} size="4x" />{" "}
            </Link>
            <a
              href="https://www.linkedin.com/in/bsinoimeri"
              className="btn-linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </a>
            <a
              href="https://www.calendly.com/bela-sinoimeri"
              className="btn-calendly"
            >
              <FontAwesomeIcon icon={faCalendarAlt} size="4x" />
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default SectionLandingPage;
