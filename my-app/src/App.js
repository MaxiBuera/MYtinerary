import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Home from "./Components/Home";
import Page2 from "./Components/Page2";
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
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Page2" component={Page2} />
          </Switch>
        </Router>
      </div>
    );
  }
}
