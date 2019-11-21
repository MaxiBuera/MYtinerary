import React, { Component } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import flecha from './circled-right-2.png'
// import { IoIosArrowDropleftCircle } from 'react-icons/fa';
// import { IoIosArrowDroprightCircle } from 'react-icons/fa';


export default class Popular extends Component {
    render() {
        return (
            <div className="conteinerr">
                 <a href="./Page2">
                    <div className="circled">
                        <img className="circled-right-2" src={flecha} alt="" />           
                    </div>
                </a>
                <div className="car">
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <Image
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Madrid</h3>
                                    </Carousel.Caption>
                                    <br></br>
                                </Col>
                                <Col>
                                    <Image
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>London</h3>
                                    </Carousel.Caption>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Image
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Berlin</h3>
                                    </Carousel.Caption>
                                    <br></br>
                                </Col>
                                <Col>
                                    <Image
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Paris</h3>
                                    </Carousel.Caption>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <Image
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Barcelona</h3>
                                    </Carousel.Caption>
                                    <br></br>
                                </Col>
                                <Col>
                                    <Image
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Barcelona</h3>
                                    </Carousel.Caption>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Image
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Barcelona</h3>
                                    </Carousel.Caption>
                                    <br></br>
                                </Col>
                                <Col>
                                    <Image
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Barcelona</h3>
                                    </Carousel.Caption>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <Image
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Barcelona</h3>
                                    </Carousel.Caption>
                                    <br></br>
                                </Col>
                                <Col>
                                    <Image
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Barcelona</h3>
                                    </Carousel.Caption>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Image
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Barcelona</h3>
                                    </Carousel.Caption>
                                    <br></br>
                                </Col>
                                <Col>
                                    <Image
                                        className="d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Barcelona</h3>
                                    </Carousel.Caption>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        )
    }
}
