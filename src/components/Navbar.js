import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className='nav' id='navbar'>
        <div className='nav-content'>
          <img
            className='nav-logo'
            src='https://fontmeme.com/permalink/191212/5ca79ce522b19e1309c8b1fe7c42a956.png'
            alt='helloitsbella'     
            onClick={this.scrollToTop}
          ></img>
          <ul className='nav-items'>
            <li className='nav-item'>
              <Link
                to='section2'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT ME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='section3'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              PROJECTS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='section4'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
