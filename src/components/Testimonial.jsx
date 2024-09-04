import React from "react";

const testimonials = [
  {
    id: 1,
    text: "Atlas Roofing's polycarbonate installation is exceptional. Durable, weather-resistant, and enhances our home's look. Highly recommend their professional service. Excellent value for money!",
    name: "Jeba",
    role: "CEO",
    image: "/polycarbonate.webp",
  },
  {
    id: 2,
    text: "Atlas Roofing’s tensile roofing exceeded my expectations. The structure is robust, visually appealing, and provides great coverage. The team's precision and efficiency were commendable.",
    name: "Rajesh",
    role: "SEO",
    image: "/tensile-roofing.avif",
  },
  {
    id: 3,
    text: "I purchased Puff Panel Sheets from Atlas Roofing, and I’m impressed with the timely delivery, reasonable cost, and the impressive strength and durability of the panels.",
    name: "Guru",
    role: "SOFTWARE DEVELOPER",
    image: "/puff-panel.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-6 flex-1">
      <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed">
        {testimonial.text}
      </p>
      <h2 className="text-xl md:text-2xl font-semibold mt-4 text-gray-800">
        {testimonial.name}
      </h2>
      <p className="text-gray-600 text-base">{testimonial.role}</p>
    </div>
    <div className="flex-shrink-0 md:w-[300px] md:h-[350px]">
      <img
        className="h-full w-full object-cover rounded-r-lg"
        src={testimonial.image}
        alt={testimonial.name}
      />
    </div>
  </div>
);

const MainContent = () => {
  return (
    <div className="bg-gray-100 p-20 max-sm:p-10">
      {/* Heading and description */}
      <div className="mb-8">
        <h1 className="text-7xl max-sm:text-[52px] font-bold  qwitcher text-[#0077b6]">
          Testimonials
        </h1>
        <p className="text-zinc-800 text-lg  max-sm:text-[16px] font-semibold mukta">
          Reviews of our privileged clients
        </p>
      </div>

      {/* Testimonial grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
