import React from 'react';
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";
import ceoImage from "../assets/ceo.jpg"; // Make sure this path is correct

const testimonials = [
  {
    name: 'Hassan Ali',
    location: 'Islamabad, PAK',
    review: 'This service was good for me good broker. Their resources and personalized support have made a huge difference in my journey. Highly recommended!',
    image: review1,
  },
  {
    name: 'John Smith',
    location: 'Lahore, PAK',
    review: 'I’ve tried many investment programs, but this one stands out. The expert webinars and one-on-one meetings have been incredibly valuable. I feel more balanced and focused than ever before.',
    image: review2,
  },
];

const Testimonial = () => {
  return (
    <div id="testimonial" className="bg-[#f7f8fc] py-12">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-Secoundary mb-3">What Our Clients Say</h2>
          <p className="text-lg md:w-1/2 mx-auto">
            Hear from some of our trusted clients about their experience with our services and support.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex md:flex-row flex-col gap-8 md:w-4/5 mx-auto px-[30px]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-white rounded-lg flex-1 p-6 shadow-md">
              {/* Quote Icon */}
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BiSolidMessageRoundedDots className="size-12 text-heroBg" />
              </div>

              {/* Review Text */}
              <p className="text-lg mb-2">{testimonial.review}</p>

              {/* User Info */}
              <div className="flex mt-8 items-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s review`}
                  className="size-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Welcome Message Section */}
        <section className="w-full  text-black px-6 py-12 mt-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start border  shadow-md">
            {/* Left - CEO Image */}
            <div className="md:w-1/2 w-full relative">
              <div className="relative">
                {/* Decorative strip */}
                <div className="absolute top-0 left-0 w-28 h-4 bg-heroBg rotate-[20deg] origin-top-left"></div>
                <img
                  src={ceoImage}
                  alt="CEO"
                  className="max-w-full h-auto object-cover border-r md:border-none"
                />
              </div>
              {/* Name strip */}
              <div className="bg-heroBg text-white text-center py-4 font-bold text-lg">
                <span className="text-xl">Naveed Ahmed Mughal</span>
                <div className="text-black font-semibold">(CEO)</div>
              </div>
            </div>

            {/* Right - Welcome Text */}
            <div className="md:w-1/2 w-full px-6 py-8">
              <h2 className="text-3xl font-bold text-heroBg mb-4">Welcome Message</h2>
              <p className="mb-4">
                We are a dynamic and multi-industry trading company dedicated to
                innovation, growth, and customer satisfaction. Our expertise spans
                across various business sectors, including e-commerce, petroleum
                trading, cryptocurrency, cash & carry, real estate, and garment
                trading.
              </p>
              <p className="mb-4">
                At Royal Friends Trading, we believe in providing high-quality
                products and services that align with modern business needs while
                maintaining ethical, transparent, and sustainable practices. Our
                goal is to bridge the gap between businesses and customers by
                offering innovative trading solutions that enhance profitability and
                efficiency.
              </p>
              <p>
                We take pride in building long-term relationships with our clients,
                investors, and partners, ensuring mutual growth and success.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;
