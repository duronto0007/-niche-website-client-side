import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 bg-img"
                    src="https://i.ibb.co/tBXzq0k/bmx-gcca53cad7-1920.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 className="text-black bold">BEST CYCLING <span className="text-danger"> EXPERIENCE!</span></h1>
                    <p className="text-black text-para">BECOME THE WORLD LEADER ON THE INTERNET FOR THE SPORT OF CYCLING!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 bg-img"
                    src="https://i.ibb.co/YkJ36z8/Cyclist-On-Sunny-Day-Bike-Adventure-Travel-Photo.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1>BEST CYCLING EXPERIENCE!</h1>
                    <p>BECOME THE WORLD LEADER ON THE INTERNET FOR THE SPORT OF CYCLING</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 bg-img"
                    src="https://i.ibb.co/Lx1mB6n/Colorful-of-cyclist-and-Bicycle-silhouettes-on-the-dark-background-of-sunset.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1>BEST CYCLING EXPERIENCE!</h1>
                    <p>BECOME THE WORLD LEADER ON THE INETENET FOR THE SPORT OF CYCLING</p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        </>
    );
};

export default Banner;