import React from "react";
import { Link } from "react-router-dom";

const handleWhatsApp = () => {
  window.open(
    "https://wa.me/7200030862?text=Hi%20I%20need%20details%20about%20"
  );
};

const Cta = () => {
  return (
    <div className="relative overflow-hidden">
      {/* SVG Background */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient
            id="Gradient1"
            cx="50%"
            cy="50%"
            fx="10%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="34s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            />
            <stop offset="0%" stopColor="#ff0" />
            <stop offset="100%" stopColor="#ff00" />
          </radialGradient>
          <radialGradient
            id="Gradient2"
            cx="50%"
            cy="50%"
            fx="10%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="23.5s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            />
            <stop offset="0%" stopColor="#0ff" />
            <stop offset="100%" stopColor="#0ff0" />
          </radialGradient>
          <radialGradient
            id="Gradient3"
            cx="50%"
            cy="50%"
            fx="50%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="21.5s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            />
            <stop offset="0%" stopColor="#f0f" />
            <stop offset="100%" stopColor="#f0f0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
          <animate
            attributeName="x"
            dur="20s"
            values="25%;0%;25%"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            dur="21s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="17s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
          <animate
            attributeName="x"
            dur="23s"
            values="-25%;0%;-25%"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            dur="24s"
            values="0%;50%;0%"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="18s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
          <animate
            attributeName="x"
            dur="25s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            dur="26s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 50 50"
            to="0 50 50"
            dur="19s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>

      {/* Content */}
      <div className="relative p-6 text-center text-white">
        <h1 className="text-3xl font-bold mb-4">
          Unlock limitless opportunities with us
        </h1>
        <div className="flex justify-center gap-5">
          <Link
            to="https://api.whatsapp.com/send?phone=09176980902"
            className="inline-block bg-primary text-primary-foreground shadow-xl px-6 py-3 rounded-lg hover:bg-primary/80 transition lnk"
            onClick={handleWhatsApp}
          >
            → Whats App
          </Link>
          <Link
            to="tel:09176980902"
            className="inline-block bg-primary text-primary-foreground shadow-xl px-6 py-3 rounded-lg hover:bg-primary/80 transition lnk"
          >
            → Call Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
