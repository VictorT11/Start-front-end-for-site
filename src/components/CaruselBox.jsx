import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gamer from '../assets/gamer.jpg';
import joistik from '../assets/joistik.jpg';
import pic from '../assets/pic.jpg';
import vrguy from '../assets/vrgay.jpg';

class CaruselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                    className='d-block w-100'
                    src={joistik}
                    alt="joystick"
                    style={{ maxHeight: '100vh' }} 
                    />
                    <Carousel.Caption>
                        <h3>Joystick</h3>
                        <p>Lorem ipsum dolar,sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='d-block w-100'
                    src={pic}
                    alt="Play in family"
                    style={{ maxHeight: '100vh' }} 
                    />
                    <Carousel.Caption>
                        <h3>Play in family</h3>
                        <p>Lorem ipsum dolar,sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='d-block w-100'
                    src={vrguy}
                    alt="vrguy"
                    style={{ maxHeight: '100vh' }} 
                    />
                    <Carousel.Caption>
                        <h3>Try VR</h3>
                        <p>Lorem ipsum dolar,sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
            
        );
    }
}

export default CaruselBox;