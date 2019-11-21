import React, { Component } from 'react'
import image from './profile_icon.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//import NavDropdown from 'react-bootstrap/NavDropdown'
import './SideBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SideBar extends Component {
    render() {
        return (
            <div className="hd">    
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <div className="icon">
                        <Navbar.Brand href="#home">
                            <img className="profile_icon" src={image} alt=""/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
          </div>  
        )
    }
}
