import React, { Component } from "react";
import myAvatar from "../myAvatar.svg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

class SectionLandingPage extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className='section section-pink'>
        <div className='section-content-landing' id={id}>
          <img className='myAvatar' src={myAvatar} alt='bela-avatar'></img>
          <h1> BELA </h1>
          <p>
            <i> Software - Electronics Engineer </i>
          </p>
          <ul className='accounts'>
            <a href='https://github.com/bsinoimeri' className='btn-github'>
              <FontAwesomeIcon icon={faGithub} size='5x' />
            </a>

            <Link
              className='btn-email'
              to='section4'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <FontAwesomeIcon icon={faEnvelope} size='5x' />{" "}
            </Link>

            <a
              href='https://www.linkedin.com/in/bsinoimeri'
              className='btn-linkedin'
            >
              <FontAwesomeIcon icon={faLinkedin} size='5x' />
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default SectionLandingPage;
