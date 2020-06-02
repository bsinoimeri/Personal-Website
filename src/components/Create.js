import React from "react";
import { withRouter } from "react-router";
import firebase from "../Firebase";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.web = firebase.firestore().collection("cardsweb");
    this.mobile = firebase.firestore().collection("cardsmobile");
    this.state = {
      fullName: null,
      description: null,
      imageUrl: null,
      github: false,
      githubUrl: null,
      livedemo: false,
      livedemoUrl: null,
      tutorial: false,
      tutorialUrl: null,
      web: false,
      mobile: false,
      activeTab: 0,
      database: null,
    };
  }

  onChangeValue = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
    console.log(state);
  };

  onAddItem = (event) => {
    event.preventDefault();
    const {
      fullName,
      description,
      imageUrl,
      github,
      githubUrl,
      livedemo,
      livedemoUrl,
      tutorial,
      tutorialUrl,
      web,
      mobile,
    } = this.state;

    this.web
      .add({
        fullName,
        description,
        imageUrl,
        github,
        githubUrl,
        livedemo,
        livedemoUrl,
        tutorial,
        tutorialUrl,
        web,
        mobile,
      })

      .then(() => {
        this.setState({
          fullName: "",
          description: "",
          imageUrl: "",
          github: false,
          githubUrl: "",
          livedemo: false,
          livedemoUrl: "",
          tutorial: false,
          tutorialUrl: "",
          web: false,
          mobile: false,
        });
      })
      .catch((error) => {
        console.error("Error sending message: ", error);
      });
    console.log(this.state.card);
  };

  render() {
    const {
      fullName,
      description,
      imageUrl,
      github,
      githubUrl,
      livedemo,
      livedemoUrl,
      tutorial,
      tutorialUrl,
      web,
      mobile,
    } = this.state;
    return (
      <div>
        <h1> Add a project details</h1>
        <form onSubmit={this.onAddItem}>
          <input
            type="text"
            name="fullName"
            placeholder="Name"
            value={fullName}
            onChange={this.onChangeValue}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.onChangeValue}
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={imageUrl}
            onChange={this.onChangeValue}
          />
          <input
            type="checkbox"
            name="github"
            placeholder="Github"
            value={github}
            onClick={() => this.setState({ github: true })}
          />
          <input
            type="text"
            name="githubUrl"
            placeholder="Github URL"
            value={githubUrl}
            onChange={this.onChangeValue}
          />
          <input
            type="checkbox"
            name="livedemo"
            placeholder="Live Demo"
            value={livedemo}
            onClick={() => this.setState({ livedemo: true })}
          />
          <input
            type="text"
            name="livedemoUrl"
            placeholder="Live Demo URL"
            value={livedemoUrl}
            onChange={this.onChangeValue}
          />
          <input
            type="checkbox"
            name="tutorial"
            placeholder="Tutorial"
            value={tutorial}
            onClick={() => this.setState({ tutorial: true })}
          />
          <input
            type="text"
            name="tutorialUrl"
            placeholder="Tutorial URL"
            value={tutorialUrl}
            onChange={this.onChangeValue}
          />
          <input
            type="checkbox"
            name="web"
            placeholder="Web"
            value={web}
            onClick={() => this.setState({ web: true })}
          />
          <input
            type="checkbox"
            name="mobile"
            placeholder="Mobile"
            value={mobile}
            onClick={() => this.setState({ mobile: true })}
          />
          <input type="submit" value="Create new project" className="btn" />
        </form>
      </div>
    );
  }
}
export default withRouter(Create);
