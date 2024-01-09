
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './lidiya.css'

// Import images
import image1 from './images/pexels-lisa-bourgeault-12487421.jpg';
import image2 from './images/pexels-roberto-nickson-2478248.jpg';
 import image3 from './images/building-1210677_1280.jpg';

const ScreensaverCarousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [image1, image2, image3];

  return (
    <Slider ref={sliderRef} {...settings}>
      {images.map((img, index) => (
        <div key={index} className="carousel-image-container">
          <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </Slider>
  );
};

export default ScreensaverCarousel;