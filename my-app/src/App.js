import React, { Component } from "react"
import { BrowserRouter as BrowserRouter, Switch, Route } from "react-router-dom";

import SideBar from './Components/SideBar/SideBar'
//Components
import Home from "./Components/Home";
import Page2 from "./Components/Page2";
import ItinerariesPage from "./Components/ItinerariesPage";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    title: "React",
    comentario: "Esto es un ejemplo",
    contador: 0
  } 

  render() {
    return (
      <div>
        <BrowserRouter>
          <SideBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Page2" component={Page2} />
            <Route path="/ItinerariesPage" component={ItinerariesPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
