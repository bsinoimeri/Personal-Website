import React, { Component } from "react";
import { useHistory, withRouter } from "react-router-dom";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Textfield,
  Card,
  CardTitle,
  CardText,
  CardActions,
} from "react-mdl";
import firebase from "../Firebase";
import { Redirect } from 'react-router';

class SectionProjects extends Component {
  constructor(props) {
    super(props);
    this.web = firebase.firestore().collection("cardsweb");
    this.mobile = firebase.firestore().collection("cardsmobile");
    this.state = {
      cardsweb: [
        {
          imageUrl: null,
          fullName: null,
          description: null,
          github: null,
          livedemo: null,
          web: true,
        },
      ],
      cardsmobile: [
        {
          imageUrl: null,
          fullName: null,
          description: null,
          github: null,
          livedemo: null,
          web: false,
        },
      ],
      activeTab: 0,
    };
  }


  GoToLogin = () => {
    let path = `Login`;
    this.props.history.push(path);
  }


  onCollectionUpdateWeb = (querySnapshot) => {
    const cardsweb = [];
    querySnapshot.forEach((doc) => {
      const {
        fullName,
        description,
        imageUrl,
        github,
        livedemo,
        web,
      } = doc.data();
      cardsweb.push({
        key: doc.id,
        doc,
        fullName,
        description,
        imageUrl,
        github,
        livedemo,
        web,
      });
    });
    this.setState({
      cardsweb,
    });
  };

  onCollectionUpdateMobile = (querySnapshot) => {
    const cardsmobile = [];
    querySnapshot.forEach((doc) => {
      const {
        fullName,
        description,
        imageUrl,
        github,
        livedemo,
        tutorial,
        web,
      } = doc.data();
      cardsmobile.push({
        key: doc.id,
        doc,
        fullName,
        description,
        imageUrl,
        github,
        livedemo,
        tutorial,
        web,
      });
    });
    this.setState({
      cardsmobile,
    });
  };

  componentDidMount = () => {
    this.web.onSnapshot(this.onCollectionUpdateWeb);
    this.mobile.onSnapshot(this.onCollectionUpdateMobile);
  };

  toggleCategories = () => {
    const { cardsweb, cardsmobile } = this.state;
    if (this.state.activeTab === 0) {
      return (
        <div
          className="projects-grid"
          style={{ overflowX: "scroll", paddingBottom: "15px" }}
        >
          {cardsweb.map((card, index) => (
            <Card
              key={index}
              shadow={2}
              style={{ minWidth: "285px", marginRight: "10px" }}
            >
              <CardTitle
                style={{
                  color: "#000",
                  height: "176px",
                  background: "url(" + card.imageUrl + ") center / cover",
                }}
              >
                {card.fullName}{" "}
              </CardTitle>
              <CardText>{card.description}</CardText>
              <div>
                <CardActions border>
                  {card.github === true ? (
                    <Button colored>GitHub</Button>
                  ) : null}
                  {card.tutorial === true ? (
                    <Button colored>Tutorial</Button>
                  ) : null}
                  {card.livedemo === true ? (
                    <Button colored>Live Demo</Button>
                  ) : null}
                </CardActions>
              </div>
            </Card>
          ))}
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div
          className="projects-grid"
          style={{ overflowX: "scroll", paddingBottom: "15px" }}
        >
          {cardsmobile.map((card, index) => (
            <Card
              key={index}
              shadow={2}
              style={{ minWidth: "285px", marginRight: "10px" }}
            >
              <CardTitle
                style={{
                  color: "#000",
                  height: "176px",
                  background: "url(" + card.imageUrl + ") center / cover",
                }}
              >
                {card.fullName}{" "}
              </CardTitle>
              <CardText>{card.description}</CardText>
              <div>
                <CardActions border>
                  {card.github === true ? (
                    <Button colored>GitHub</Button>
                  ) : null}
                  {card.tutorial === true ? (
                    <Button colored>Tutorial</Button>
                  ) : null}
                  {card.livedemo === true ? (
                    <Button colored>Live Demo</Button>
                  ) : null}
                </CardActions>
              </div>
            </Card>
          ))}
        </div>
      );
    }
  };

  render() {
    const { id } = this.props;
    return (
      <div className="section-gray row">
        <div className="section-content-projects" id={id}>
          <h1> PROJECTS </h1>
        </div>
        <div className="section-content-projects-below" id={id}>
          <div style={{ maxWidth: "1055px", paddingTop: "30px" }}>
            <Tabs
              activeTab={this.state.activeTab}
              onChange={(tabId) => this.setState({ activeTab: tabId })}
            >
              <Tab>Web</Tab>
              <Tab>Mobile</Tab>
            </Tabs>
            <Grid>
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
                <div style={{ textAlign: "center" }}></div>
              </Cell>
            </Grid>
          </div>
          <div style={{ paddingBottom: "30px" }}>
          <Button colored onClick={this.GoToLogin} raised ripple>
            {" "}
            Create new project
          </Button>
         </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SectionProjects);
