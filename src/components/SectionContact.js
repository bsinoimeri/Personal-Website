import React, { Component } from "react";
import { Textfield, Button} from "react-mdl";
import firebase from '../Firebase';
import illustrationcontact from "../illustrationcontact.svg";

class SectionContact extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('dataform');
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }


  onSubmit = (e) => {
    e.preventDefault();
     const { name, email, message } = this.state;
    this.ref.add({
      name,
      email,
      message
    }).then((docRef) => {
      this.setState({
        name: '',
        email: '',
        message: ''
      });
      this.props.history.push("")
    })
    .catch((error) => {
      console.error("Error sending message: ", error);
    });
  }


  render() {
    const { id } = this.props;
    const { name, email, message } = this.state;
    return (
      <div className='section row'>
        <div className='section-content-contact' id={id}>
          <h1> CONTACT </h1>
        </div>
        <div className='section-content-contact-below'>
        <div className='row'>

          <div className='column'>
              <div className='contact-photo-column'>
                <img
                  className='illustrationcontact'
                  src={illustrationcontact}
                  alt='illustrationcontact'
                ></img>
              </div>
          </div>

          <div className='column' style={{paddingTop: "20px"}}>
          <form onSubmit={this.onSubmit}>
          <Textfield
            label='NAME...'
            style={{ width: "250px" }}
            name="name"
            value={name}
            onChange={this.onChange}
          />
          <Textfield
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
            error='INPUT IS NOT AN EMAIL!'
            label='EMAIL...'
            style={{ width: "250px" }}
            name="email"
            value={email}
            onChange={this.onChange}
          />
          <Textfield
            label='LEAVE A MESSAGE...'
            rows={2}
            style={{ width: "250px", outlineColor:"white" }}
            name="message"
            value={message}
            onChange={this.onChange}
          />
           <Button raised colored type="submit" accent> Submit </Button>
          </form>
        </div>

      </div>
      </div>
      </div>
    );
  }
}

export default SectionContact;
