import React, { Component } from "react"

//Components

import SideBar from './SideBar/SideBar'
import MainTitle from './MainTitle/MainTitle'
import Popular from './Popular/Popular'
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
          <SideBar />
          <MainTitle />
          <Popular />
      </div>
    );
  }
}
