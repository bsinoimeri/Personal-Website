import React, { Component } from "react";
import Video from "../assets/Video.mp4";
import { Redirect } from "react-router-dom";

class PreWeb extends Component {
  state = {
    redirect: false,
  };

  setRedirect = () => {
    console.log("bela");
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: "#74CAE6" }}>
        {this.renderRedirect()}
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          className="background-video"
          onClick={this.setRedirect}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default PreWeb;
