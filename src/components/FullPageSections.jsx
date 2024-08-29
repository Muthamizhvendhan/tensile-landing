// Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

const images = [
  "/image-1.jpeg",
  "/puff-panel.jpeg",
  "/polycarbonate-roofing.avif"
];

const FullPageSections = () => {
  return (
    <div className="w-full overflow-hidden">
      <Slider {...sliderSettings}>
        {images.map((src, index) => (
          <div key={index} className="relative">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full aspect-video object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FullPageSections;