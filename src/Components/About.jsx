import React from "react";

const About = () => {
  return (
    <section className="bg-white scroll-mt-28" id="about">
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="inline-block bg-[#916C47] text-white px-6 py-2 font-bold text-3xl mb-8 relative skew-x-[-15deg]">
          <div className="-skew-x-[-15deg]">Our Mission</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-gray-800 text-[17px]">
          <div className="space-y-4">
            <p>
              <span className="font-bold text-[#916C47]">Deliver Excellence:</span>{" "}
              Provide high-quality services and products tailored to the needs of our clients.
            </p>
            <p>
              <span className="font-bold text-[#916C47]">Expand Globally:</span>{" "}
              Grow our presence in international markets while maintaining strong local operations.
            </p>
            <p>
              <span className="font-bold text-[#916C47]">Promote Innovation:</span>{" "}
              Leverage technology, digital platforms, and modern trading practices to enhance business operations.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              <span className="font-bold text-[#916C47]">Ensure Sustainability:</span>{" "}
              Conduct business ethically, ensuring social responsibility and environmental care.
            </p>
            <p>
              <span className="font-bold text-[#916C47]">Empower Customers:</span>{" "}
              Offer value-driven solutions that improve the efficiency and profitability of businesses and individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
