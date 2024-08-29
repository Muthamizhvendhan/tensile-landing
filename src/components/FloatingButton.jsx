import React from "react";
import { Link } from "react-router-dom";

const handleWhatsApp = () => {
  window.open(
    "https://wa.me/7200030862?text=Hi%20I%20need%20details%20about%20"
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-[15%] right-4 z-10">
        <Link
            to="mailto:atlasroofings@gmail.com"
            className="block w-8 bg-blue-500 rounded-full mb-4 items-center justify-center shadow-md hover:bg-blue-600 hover-preload"
        >
            <img src="/email.gif" className="w-8" alt="Call" />
        </Link>
      <Link
        to="https://api.whatsapp.com/send?phone=9176980902"
        target="_blank"
        className="block w-8 bg-green-500 rounded-full items-center justify-center mb-4 shadow-md hover:bg-green-600 hover-preload"
        onClick={handleWhatsApp}
      >
        <img src="/whatsapp.gif" className="w-8" alt="WhatsApp" />
      </Link>
      <Link
        to="tel:+09176980902"
        className="block w-8 bg-blue-500 rounded-full items-center justify-center shadow-md hover:bg-blue-600 hover-preload"
      >
        <img src="/call.gif" className="w-[100%]" alt="Call" />
      </Link>
    </div>
  );
};

export default FloatingButtons;