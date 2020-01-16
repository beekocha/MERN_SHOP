import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../../img/c1.jpg';
import c2 from '../../img/c2.jpg';
import c3 from '../../img/c3.jpg';


const Carusel = () => {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    style={{maxHeight: '700px'}}
                    className="d-block w-100"
                    src={c3}
                    alt="Product 1"
                />
            <Carousel.Caption>
                    <h3>JACKETS</h3>
                    <h4>You must be safe.</h4>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    style={{maxHeight: '700px'}}
                    className="d-block w-100"
                    src={c2}
                    alt="Product 2"
                />
                <Carousel.Caption>
                    <h3>BOARDS</h3>
                    <h4>You have to feel confident.</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{maxHeight: '700px'}}
                    className="d-block w-100"
                    src={c1}
                    alt="Product 3"
                />
                <Carousel.Caption>
                    <h3>BOOTS</h3>
                    <h4>You need to be in comfort.</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carusel;