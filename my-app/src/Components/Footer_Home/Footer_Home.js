import React, { Component } from 'react'
import './Footer_Home.css'
import titleImage from './homeIcon.png'
import { Link } from "react-router-dom";

export default class Footer_Home extends Component { 
    render() {
        return (
            <div >
                <div  className="footer_home">
                    <Link to="/">
                        <img className="homeIcon" src={titleImage} alt="toHome"/>
                    </Link>                  
                </div>
            </div>
        )
    }
}
