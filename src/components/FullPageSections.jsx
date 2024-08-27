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
  "https://img.freepik.com/free-photo/view-nature-landscape-with-lake_23-2150763840.jpg?t=st=1724403677~exp=1724407277~hmac=c0fbcacf2252fc7f1fc5427d0d53455abafd118b9d704529ddad5ebcb55acad3&w=1380",
  "https://img.freepik.com/free-photo/view-spectacular-nature-landscape_23-2150763636.jpg?t=st=1724394519~exp=1724398119~hmac=6def54c5506f6e5955a112da48fd06bdab775ec9777a9503dc40b041a2d48c34&w=1380"
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