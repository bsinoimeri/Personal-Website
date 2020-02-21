import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Section from "./components/Section";
import SectionLandingPage from "./components/SectionLandingPage";
import SectionAbout from "./components/SectionAbout";
import SectionProjects from "./components/SectionProjects";
import SectionContact from "./components/SectionContact";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <SectionLandingPage id='section1'/>
        <SectionAbout id='section2'/>
        <SectionProjects  id="section3"/>
        <SectionContact id="section4"
        /> 
      </div>
    );
  }
}

export default App;
