import React, { Component } from 'react'
import './Footer_Home.css'
import titleImage from './homeIcon.png'

export default class Footer_Home extends Component { 
    render() {
        return (
            <div >
                <div  className="footer_home">
                    <a href="./">
                        <img className="homeIcon" src={titleImage} alt="toHome"/>
                    </a>                  
                </div>
            </div>
        )
    }
}
