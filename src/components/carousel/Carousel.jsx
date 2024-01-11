
import React, { useEffect, useRef, useState } from 'react';
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
 


  const [changingTextIndex, setChangingTextIndex] = useState(0);
  const changingTexts = ['A Turnkey Real Estate Development Platform.  Collegium is the Digital Antithesis of Traditional Design & Construction.', 'Collapsing Cost, Schedule, and Risk using Collegium', 'Buyers Guide.  Is a Collegium project right for you?']; // Add your desired texts

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    // Changing text every 5 seconds
    const textIntervalId = setInterval(() => {
      setChangingTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearInterval(textIntervalId);
    };
  }, [changingTexts.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [image1, image2, image3];
  const [changingText, setChangingText] = useState('Learn more about Collegium');

  return (
   <div>
      <div className="changing-text-container">
      <p className='changing-text'>{changingTexts[changingTextIndex]}</p>
      </div>
    <Slider ref={sliderRef} {...settings}>
      {images.map((img, index) => (
        <div key={index} className="carousel-image-container">
          <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
          
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ScreensaverCarousel;