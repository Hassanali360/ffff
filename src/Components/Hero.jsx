import React from 'react'
import heroimg from "../assets/hero.webp"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useScroll } from 'framer-motion';

const Hero = () => {
useScroll();


  return (
    <div id='home' >
      <section className='bg-heroBg text-white flex items-center pt-28 md:h-screen '>
        <div className='container mx-auto flex flex-col md:flex-row items justify-between p-8 overflow-y-hidden gap-12 h-full '>
        {/* left side */}
        <div className='md:w-1/2 '>
            <h1  className='mt-[200px] text-3xl font-bold font-Secoundary md:w-3/5 leading-snug  '>Start Your Journey To Mental Wellness</h1> 
      <p  className='mt-6  '>A mental health website provides resources, support, and information on 
        mental well-being. It typically includes articles, self-help tools, therapy options, and community forums to help users manage stress, anxiety, depression, and other mental health issues. The site often emphasizes accessibility and confidentiality, 
        of.</p>
        <button className='flex justify-center gap-2'><a href="#contacts" className='mt-7 bg-Primary gap-2 flex items-center py-2 px-2 rounded-lg font-bold  hover:bg-Primary/90'>
         Get Started<FaArrowAltCircleRight className='text-center' /></a></button>
        </div>
         

         <div className='md:w-1/2 h-full'>
        <img src={heroimg} alt="heroimg" className='w-full object-cover' />
         </div>


        </div>

      </section>
    </div>
  )
}

export default Hero