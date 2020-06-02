import React, { Component } from "react";
import myAvatar from "../myAvatar.svg";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

class SectionLandingPage extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="section section-pink">
        <div className="section-content-landing" id={id}>
          <img className="myAvatar" src={myAvatar} alt="bela-avatar"></img>
          <br></br>
          <img
            className="belasinoimeri-logo"
            src="https://fontmeme.com/permalink/200502/93c090dfeba70e5350905e591d15bdd0.png"
            alt="belasinoimeri"
            onClick={this.scrollToTop}
          ></img>
          <p>
            <i style={{ fontFamily: "Raleway" }}>
              {" "}
              Software - Electronics Engineer{" "}
            </i>
          </p>
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
