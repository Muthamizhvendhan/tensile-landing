import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="gradient pl-4 pr-4 sticky top-0 z-50">
      {" "}
      {/* Added sticky and top-0 classes */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/atlas.png"
            alt="Nexcent Logo"
            className="w-20 h-25"
          />
        </div>
        <div className="hidden md:flex space-x-10 items-center">
          <a
            href="#"
            className="text-white text-xl hover:text-muted-foreground"
          >
            Home
          </a>
          <a
            href="#about-us"
            smooth={true} duration={500}
            className="text-white text-xl hover:text-muted-foreground"
          >
            About Us
          </a>
          <a
            href="#services"
            smooth={true} duration={500}
            className="text-white text-xl hover:text-muted-foreground"
          >
            Services
          </a>
          <a
            href="#testimonials"
            smooth={true} duration={500}
            className="text-white text-xl hover:text-muted-foreground"
          >
            Testimonials
          </a>

          <a
            href="tel:09176980902"
            className="bg-[#5e9dc2] text-white px-4 py-2 rounded-md hover:bg-[#4d4d4d]"
          >
            Call Now →
          </a>
        </div>
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-muted focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`${isMenuOpen ? "" : "hidden"} md:hidden`}
      >
        <a href="#" className="block text-muted text-white font-semibold text-xl hover:text-muted-foreground">
          Home
        </a>
        <a href="#about-us"
             className="block text-muted text-white font-semibold text-xl hover:text-muted-foreground">
          About Us
        </a>
        <a href="#services" className="block text-muted text-white font-semibold text-xl hover:text-muted-foreground">
        Services
        </a>
        <a  href="#testimonials" className="block text-muted text-white font-semibold text-xl hover:text-muted-foreground">
        Testimonials
        </a>

        <a
          href="tel:09176980902"
          className="block mt-5 bg-[#437e71e8] text-white px-4 py-2 rounded-md hover:bg-[#4d4d4d]"
        >
          Call Now →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;