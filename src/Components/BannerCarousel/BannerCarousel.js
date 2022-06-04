import React from "react";
import { Carousel } from "react-bootstrap";
import Affiliate_marketing from "../../assets/affiliate_marketing.png";
import Digital_marketing from "../../assets/Digitalmarketing.png";
import IT_solutions from "../../assets/it_solutions.png";
import "./BannerCarousel.css";

function BannerCarousel(props) {
  return (
    <div>
      <Carousel controls={false} fade pause={false}>
        <Carousel.Item interval={20000}>
          <div className="overlay"></div>
          <img
            className="d-block w-100"
            src={Affiliate_marketing}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>It's 'net-worth'</h3>
            <p>marketing</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <div className="overlay"></div>
          <img
            className="d-block w-100"
            src={Digital_marketing}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Digi-Tech</h3>
            <p>Services For Your business!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <div className="overlay"></div>
          <img className="d-block w-100" src={IT_solutions} alt="Third slide" />
          <Carousel.Caption>
            <h3>Out-and-Out</h3>
            <p>tech services</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BannerCarousel;
