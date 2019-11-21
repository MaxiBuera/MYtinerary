import React, { Component } from "react"

//Components

import Cities from './Cities/Cities'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./SideBar/SideBar";
import Footer_Home from "./Footer_Home/Footer_Home";

export default class App extends Component {


  render() {
    return (
      <div>
          <SideBar />
          <Cities />
          <Footer_Home />
      </div>
    );
  }
}
