import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { useForm } from 'react-hook-form';

const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div id= 'contact' 
     className='bg-heroBg flex items-center justify-center py-20 px-8' id='contact'>
      <div className='container mx-auto'>
        <div className='flex md:flex-row flex-col justify-between md:w-11/12 w-full gap-12'>
          {/* Left Section */}
          <div className='ml-4 md:ml-8'>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 space-y-10">
              {/* Info Items */}
              <div className='flex items-center gap-4'>
                <FaUserCircle className='text-Primary text-4xl' />
                <div className='space-y-1 font-medium text-sm text-white'>
                  <div>24 Hour Service</div>
                  <div className='whitespace-nowrap'>Lorem ipsum dolor sit amet consectetur.</div>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <IoMdMail className='text-Primary text-4xl' />
                <div className='space-y-1 font-medium text-sm text-white'>
                  <div>Expert Therapy</div>
                  <div className='whitespace-nowrap'>Lorem ipsum dolor sit amet consectetur.</div>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <IoCallOutline className='text-Primary text-4xl' />
                <div className='space-y-1 font-medium text-sm text-white'>
                  <div>High Quality Core</div>
                  <div className='whitespace-nowrap'>Lorem ipsum dolor sit amet consectetur.</div>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <TbWorld className='text-Primary text-4xl' />
                <div className='space-y-1 font-medium text-sm text-white'>
                  <div>Trusted Clinic</div>
                  <div className='whitespace-nowrap'>Lorem ipsum dolor sit amet consectetur.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className='bg-white p-6 rounded-lg shadow-lg w-full md:w-auto'>
            <h3 className='font-bold text-lg mb-4'>Book Appointment</h3>
            <form onSubmit={handleSubmit(onSubmitForm)} className='grid md:grid-cols-2 gap-4'>
              {/* Name Field */}
              <input
                {...register('name', {
                  required: "Name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Name should contain only letters and spaces",
                  },
                })}
                type="text"
                placeholder='Name*'
                className='border-b border-gray-300 rounded-sm text-sm h-10 p-2 w-full'
              />
              {errors.name && <span className='text-red-500'>{errors.name.message}</span>}

              {/* Contact Field */}
              <input
                {...register('contact', { required: "Contact is required", minLength: { value: 11, message: "Contact must be at least 11 characters" } })}
                type="text"
                placeholder='Contact*'
                className='border-b border-gray-300 rounded-sm text-sm h-10 p-2 w-full'
              />
              {errors.contact && <span className='text-red-500'>{errors.contact.message}</span>}

              {/* Email Field */}
              <input
                {...register('email', {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                type="email"
                placeholder='Email*'
                className='border-b border-gray-300 rounded-sm text-sm h-10 p-2 w-full'
              />
              {errors.email && <span className='text-red-600 text-sm'>{errors.email.message}</span>}

              {/* Country Field */}
              <input
                {...register('country', { required: "Country is required", minLength: { value: 2, message: "Country must be at least 2 characters" } })}
                type="text"
                placeholder='Country'
                className='border-b border-gray-300 rounded-sm text-sm h-10 p-2 w-full'
              />
              {errors.country && <span className='text-red-500'>{errors.country.message}</span>}

              {/* Message Field */}
              <textarea
                placeholder='Message'
                className='border-b border-gray-300 rounded-sm text-sm h-24 p-2 w-full md:col-span-2 resize-none'
              />

              {/* Submit Button */}
              <button type="submit" className='text-white bg-Primary h-12 text-center rounded-lg text-lg hover:font-bold md:col-span-2'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
