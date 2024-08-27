import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div>
      <div className="bg-background p-6 text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Reach us with endless possibilities
        </h1>
        <Link
          to="tel:09176980902"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80 transition"
        >
          → Get a Demo
        </Link>
        <Link
          to="/"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80 transition"
        >
          → Get a Demo
        </Link>
      </div>
    </div>
  );
};

export default Cta;
