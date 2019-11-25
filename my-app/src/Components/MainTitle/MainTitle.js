import React, { Component } from 'react'
import './MainTitle.css'
import titleImage from './MYtineraryLogo.png'

export default class MainTitle extends Component { 
    render() {
        return (
            <div >
                <div className="mytinerary">                   
                    <img className="MYtineraryLogo" src={titleImage} alt="toCities"/>  
                </div>
                <div className="desc"> 
                    <p className="description">
                        Find your perfect trip, designed by insiders
                    </p>
                    <p className="description2">
                        who loves and their cities
                    </p>
                </div>                
            </div>
        )
    }
}
