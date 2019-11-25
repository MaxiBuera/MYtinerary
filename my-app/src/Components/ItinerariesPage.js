import React, { Component } from "react"

//Components

import Itineraries from './Itineraries/Itineraries'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer_Home from './Footer_Home/Footer_Home';

export default class ItinerariesPage extends Component {


  render() {
    return (
      <div>
        <Itineraries />
        <Footer_Home />
      </div>
    );
  }
}
