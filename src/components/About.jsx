import React from "react";

const About = () => {
  return (
    <div id="about-us">
      <div className="flex flex-col md:flex-row items-center justify-between p-10 md:p-20 bg-background">
        <div className="flex-1">
          <h2 className="text-7xl max-sm:text-[52px] font-bold text-foreground mb-4 text-[#0077b6] qwitcher">
            About Us
          </h2>
          <p className="text-muted-foreground mb-4 text-justify mukta text-lg max-sm:text-[16px]">
            At Atlas Roofing, we specialize in providing top-quality roofing
            installation services and premium roofing materials. With a
            commitment to excellence, our expert team ensures durable and
            reliable roofing solutions for residential and commercial projects.
            Trust us for superior craftsmanship and a wide range of materials
            that meet the highest industry standards, making your property
            secure and weatherproof.
          </p>
        </div>
        <div className="w-full flex flex-1 justify-center mb-6 md:mb-0 ml-2 max-sm:ml-0">
          <img
            alt="illustration of a person signing up"
            src="/about.avif"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
