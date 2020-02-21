import React, { Component } from "react";
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
  CardMenu,
  IconButton
} from "react-mdl";
import firebase from "../Firebase";

class SectionProjects extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("project");
    this.unsubscribe = null; // ta shfaqesh
    this.state = {
      cards: [
        {
          imageUrl: null,
          fullName: null,
          description: null
        }
      ],
      activeTab: 0
    };
  }

  onChangeValue = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
    console.log(state);
  };

  handleOpenDialog = () => {
    this.setState({
      openDialog: true
    });
  };

  handleCloseDialog = () => {
    this.setState({
      openDialog: false
    });
  };

  onCollectionUpdate = querySnapshot => {
    const cards = [];
    querySnapshot.forEach(doc => {
      const { fullName, description, imageUrl } = doc.data();
      cards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        fullName,
        description,
        imageUrl
      });
    });
    this.setState({
      cards
    });
  };

  componentDidMount = () => {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }; // kjo dhe funks siper te shfaq cfare ka ne databaze

  onAddItem = event => {
    event.preventDefault();
    this.handleCloseDialog();
    const cards = [...this.state.cards, this.state];
    this.setState({ cards });
    const { fullName, description, imageUrl } = this.state;
    this.ref
      .add({
        fullName,
        description,
        imageUrl
      })
      .then(docRef => {
        this.setState({
          fullName: "",
          description: "",
          imageUrl: ""
        });
      })
      .catch(error => {
        console.error("Error sending message: ", error);
      });
  };

  toggleCategories = () => {
    const { cards } = this.state;
    if (this.state.activeTab === 0) {
      return (
        <div>
          <div
            className='projects-grid'
            style={{  overflowX: "scroll", paddingBottom: "15px"}}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                shadow={2}
                style={{ minWidth: "285px", marginRight: "10px" }}
              >
                <CardTitle
                  style={{
                    color: "#000",
                    height: "176px",
                    background: "url(" + card.imageUrl + ") center / cover"
                  }}
                >
                  {card.fullName}{" "}
                </CardTitle>
                <CardText>{card.description}</CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
              </Card>
            ))}
          </div>
          <div style={{paddingTop: "30px", paddingBottom: "30px"}}>
          <Button colored onClick={this.handleOpenDialog} raised ripple style={{margin: "0px 327.5px"}}>
            {" "}
            Create new project
          </Button>
          </div>
          <Dialog
            open={this.state.openDialog}
            onCancel={this.handleCloseDialog}
          >
            <DialogTitle> Add a project details</DialogTitle>

            <DialogContent>
              <Textfield
                onChange={this.onChangeValue}
                label='Name'
                name='fullName'
                id='fullName'
                value={this.state.fullName}
                floatingLabel
                style={{ width: "200px" }}
              />

              <Textfield
                onChange={this.onChangeValue}
                label='Description'
                name='description'
                value={this.state.description}
                floatingLabel
                style={{ width: "200px" }}
              />
              <Textfield
                onChange={this.onChangeValue}
                label='URL of the image'
                name='imageUrl'
                value={this.state.imageUrl}
                floatingLabel
                style={{ width: "200px" }}
              />

              <p>Are you sure you want to add a new project?</p>
            </DialogContent>
            <DialogActions>
              <Button type='button' onClick={this.onAddItem}>
                {" "}
                Continue{" "}
              </Button>
              <Button type='button' onClick={this.handleCloseDialog}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Mobile</h1>
        </div>
      );
    }
  };

  render() {
    const { id } = this.props;
    return (
      <div className='section-gray row'>
        <div className='section-content-projects' id={id}>
          <h1> PROJECTS </h1>
        </div>
        <div className='section-content-projects-below' id={id}>
          <div style={{ maxWidth: "1055px" }}>
            <Tabs
              activeTab={this.state.activeTab}
              onChange={tabId => this.setState({ activeTab: tabId })}
            >
              <Tab>Web</Tab>
              <Tab>Mobile</Tab>
            </Tabs>
            <Grid>
              <Cell col={12}>
                <div className='content'>{this.toggleCategories()}</div>
                <div style={{ textAlign: "center" }}></div>
              </Cell>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionProjects;
