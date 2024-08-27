import React from "react";

const testimonials = [
  {
    id: 1,
    text: "Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She is also known as the best selling book author.",
    name: "Zen",
    role: "Author",
    image:
      "https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg",
  },
  {
    id: 2,
    text: "Jonathan Koletic is an American internet entrepreneur and media proprietor, and investor. He is the founder of the multi-national technology company Treymont.",
    name: "Jonathan",
    role: "Treymont Inc.",
    image:
      "https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg",
  },
  {
    id: 3,
    text: "Charlie Green is a European entrepreneur and media consultant, and investor. He is the founder of the Hallmark Inc.",
    name: "Charlie",
    role: "Hallmark Inc.",
    image:
      "https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-6 flex-1">
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
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
