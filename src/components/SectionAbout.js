import React, { Component } from "react";
import illustrationabout from "../illustrationabout.svg";
import {Button} from "react-mdl";
import cv from "../cv.pdf";

class SectionAbout extends Component {

  onResumeClick = ()=> {
    window.open(cv);
  }

  render() {
    const { id } = this.props;
    return (

      <div className='section row'>
        <div className='section-content-about' id={id}>
          <h1> ABOUT ME </h1>
        </div>
        <div className='section-content-about-below'>
          <div className='row'>
            <div className='column' style={{paddingTop: "20px"}}>
              <div>
                <p>
                  <i>
                    Just a 23-year-old software engineer working in agile development using
                    the latest tech stack. 
                  </i>
                </p>
                <p>
                  <i>
                    A valedictorian graduate in MSc Electronic Engineering, who
                    likes combining software and hardware
                    skills.
                  </i>
                </p>
              </div>
            </div>
            <div className='column'>
              <div className='resume-photo-column'>
                <img
                  className='illustrationabout'
                  src={illustrationabout}
                  alt='illustrationabout'
                ></img>
                <Button raised colored onClick={this.onResumeClick}>Resume</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionAbout;
