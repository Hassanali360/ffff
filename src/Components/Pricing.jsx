import React from 'react'
 import ceoImage from "../assets/ceo2.jpg"



const Pricing = () => {


  return (


<section className="bg-white py-12 px-4 md:px-8 scroll-mt-28" id="welcome">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Image Section */}
        <div className="relative">
          <div className="border border-gray-300">
            <img src={ceoImage} alt="Naveed Ahmed Mughal (CEO)" className="w-full object-cover" />
            <div className="bg-[#916C47] text-white text-center py-2 font-bold text-lg">
              Naveed Ahmed Mughal <br className="md:hidden" />
              <span className="text-base font-semibold">(CEO)</span>
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="text-[#916C47] text-3xl font-bold mb-4">CEO's Message</h2>
          <p className="text-gray-700 mb-4">
            We are a dynamic and multi-industry trading company dedicated to innovation,
            growth, and customer satisfaction. Our expertise spans across various business
            sectors, including e-commerce, petroleum trading, cryptocurrency, cash & carry,
            real estate, and garment trading.
          </p>
          <p className="text-gray-700 mb-4">
            At Royal Friends Trading, we believe in providing high-quality products and services
            that align with modern business needs while maintaining ethical, transparent, and
            sustainable practices. Our goal is to bridge the gap between businesses and customers
            by offering innovative trading solutions that enhance profitability and efficiency.
          </p>
          <p className="text-gray-700">
            We take pride in building long-term relationships with our clients, investors,
            and partners, ensuring mutual growth and success.
          </p>
        </div>
      </div>
    </section>
    
  )
}

export default Pricing