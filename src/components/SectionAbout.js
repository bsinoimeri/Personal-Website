import React, { Component } from "react";
import illustrationabout from "../illustrationabout.svg";
import { Button } from "react-mdl";
import cv from "../cv.pdf";
import AboutMe from "../assets/AboutMe.png";
import AboutMeExpanded from "../assets/AboutMeExpanded.gif";

class SectionAbout extends Component {
  onResumeClick = () => {
    window.open(cv);
  };

  render() {
    const { id } = this.props;
    return (
      <div className="section row">
        <div className="section-content-about" id={id}>
          <img
            src={AboutMe}
            alt="AboutMe"
            className="nav-logo-menu-about"
          ></img>
        </div>


        <div className="column-about">
        <img
            src={AboutMeExpanded}
            alt="AboutMe"
            className="bela-expanded"
          ></img>
        </div>


        <div className="column-about">
          <div className="row">
              <div>
                <p>
                    A 23-year-old software engineer working in agile
                    development using the latest tech stack.
                </p>
                <p>
                    A valedictorian graduate in MSc Electronic Engineering, who
                    likes combining software and hardware skills.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="resume-photo-column">
                <Button raised colored onClick={this.onResumeClick}>
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default SectionAbout;
