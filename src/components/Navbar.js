import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import AboutMe from "../assets/AboutMe.png";
import Contact from "../assets/Contact.png";
import Projects from "../assets/Projects.png";
import Logo from "../assets/Heart.png";

class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={Logo}
            alt="helloitsbella"
            onClick={this.scrollToTop}
            className="nav-logo-main-menu"
          ></img>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img
                  src={AboutMe}
                  alt="AboutMe"
                  className="nav-logo-menu"
                ></img>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img
                  src={Projects}
                  alt="Projects"
                  className="nav-logo-menu"
                ></img>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img
                  src={Contact}
                  alt="Contact"
                  className="nav-logo-menu"
                ></img>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
