import React, { Component, useContext}from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionLandingPage from "./components/SectionLandingPage";
import SectionAbout from "./components/SectionAbout";
import SectionProjects from "./components/SectionProjects";
import SectionContact from "./components/SectionContact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Create from "./components/Create";
import PreWeb from "./components/PreWeb";
import {AuthProvider} from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
          <Route exact path="/" component={PreWeb} />
            <Route
              exact path="/home"
              render={() => (
                <div>
                  <Navbar />
                  <SectionLandingPage id="section1" />
                </div>
              )}
            />        
          <Route exact path="/login" component={Login} />
          <Route exact path="/create" component={Create} />
          </div>
        </Router>
        </AuthProvider>
    );
  }
}

export default App;
