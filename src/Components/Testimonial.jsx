import React from 'react'
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import review1 from "../assets/review1.webp"
import review2 from "../assets/review2.webp"

const testimonials = [
  {
    name: 'Jane Doe',
    location: 'New York, NY',
    review: 'This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!',
    image: review1,
  },
  {
    name: 'John Smith',
    location: 'Los Angeles, CA',
    review: 'I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.',
    image: review2,
  },
]



const Testimonial = () => {
  return (
    <div id='testimonial' className='bg-[#f7f8fc] py-12'>
      <div className='container mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-Secoundary mb-3'>What Our Clients Says  </h2>
          <p className='textlg mb-12 md:w-1/2 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iure aspernatur voluptatum laudantium odit, itasandae ullam minus, didi tempore, repellat nulla?</p>
        </div>
        <div className='flex md:flex-row flex-col md:w-4/5 md:gap-12 gap-8 container mx-auto px-[30px] '>
          {
            testimonials.map((testimonial, index) => (
              <div key={index} className='relative bg-white rounded-lg flex-1 p-6'>
                <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 '>
                  <BiSolidMessageRoundedDots className='size-12 text-Primary' />

                </div>
                <div>
                  <p className='text-lg mb-2'>{testimonial.review}</p>
                  <div className='flex mt-8'>
                    <img src={testimonial.image} alt=""
                      className='size-16 rounded-full object-cover mr-4' />
                    <div>     
                          <p className='font-semibold'>{testimonial.name}</p>
                      <p className='text-gray-600'>{testimonial.location}</p>
                    </div>
                  </div>
                </div>


              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Testimonial