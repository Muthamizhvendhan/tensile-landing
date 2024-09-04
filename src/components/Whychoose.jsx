import React from "react";

const Whychoose = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-zinc-800 mukta">
          We Manage your entire dream till the end!
        </h2>
        <p className="text-center text-zinc-600 mt-2 text-xl mukta">
          Why you need us?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              className="mx-auto w-[80px] h-[80px]"
              alt="membership-organisations"
              src="/experienced.png"
            />
            <h3 className="font-semibold mt-4 text-2xl mukta">
              Experienced Executors
            </h3>
            <p className="text-zinc-600 mt-2 text-justify text-md mukta">
              Trusted professionals delivering expert management and seamless
              execution of your projects.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              className="mx-auto w-[80px] h-[80px]"
              alt="national-associations"
              src="/high-quality.png"
            />
            <h3 className="font-semibold mt-4 text-2xl mukta">
              High Quality Materials
            </h3>
            <p className="text-zinc-600 mt-2 text-justify text-md mukta">
              Premium resources ensuring durability, performance, and excellence
              in every project.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              className="mx-auto w-[80px] h-[80px]"
              alt="clubs-and-groups"
              src="/cost-effective.png"
            />
            <h3 className="font-semibold mt-4 text-2xl mukta">
              Competitive Pricing
            </h3>
            <p className="text-zinc-600 mt-2 text-justify text-md mukta">
              Affordable rates without compromising on quality or value for your
              investment.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              className="mx-auto w-[80px] h-[80px]"
              alt="clubs-and-groups"
              src="/checklist.png"
            />
            <h3 className="text-2xl mukta font-semibold mt-4">Pre + Post QA</h3>
            <p className="text-zinc-600 mt-2 text-justify text-md mukta">
              Ensuring excellence with thorough assessments before and after
              project completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
