import React, { Component } from "react"

//Components

import Cities from './Cities/Cities'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer_Home from "./Footer_Home/Footer_Home";

export default class Page2 extends Component {


  render() {
    return (
      <div>
        <Cities />
        <Footer_Home />
      </div>
    );
  }
}
