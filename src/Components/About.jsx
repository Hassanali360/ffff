import React from 'react'
import { useState } from 'react'
import thumbnailimg from "../assets/video-thumbnail.webp"
import { FaCirclePlay } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {

  const [isVideoplaying, setIsVideoplaying] = useState(false)
  const handleVideoPlaye = () => {
    setIsVideoplaying(true);
  }

  const handleClose = () => {
    setIsVideoplaying(false);
  }
  return (
    <div id='about' className='bg-[#f7f8fc] pb-16 pt-20 '>

<div className='container mx-auto'>
<div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
{/* leftSide */}
<div className='md:w-1/2 w-full mb-8 md:mb-0  ' >
{
  !isVideoplaying ? (
    <div className='relative'>
      <img src={thumbnailimg} alt="" 
      className='w-full md:h-[446px] h-auto rounded-lg object-cover'
      />
      <button 
      onClick={handleVideoPlaye}
      className='absolute inset-0 flex items-center justify-center '><FaCirclePlay className='text-4xl text-white  rounded-lg' />
      </button>
    </div>
  ) : (
    null
  )
}

</div>

{/* rightSide */}

<div className='md:w-1/2 w-full  '>

     <h1  className=' text-2xl font-bold font-Secoundary  leading-snug  '>Indivisual Consult And Therapy</h1> 
      <p  className='mt-6  '>A mental health website provides resources, support, and information on 
        mental well-being. It typically includes articles, sitefidentiality, hwehbfe hbf 3ehhb 3efhb 3hhf 3bf 3bf3i  i33bifi3 
        of.</p>
        <button className='flex justify-center gap-2'><a href="#contacts" className='mt-7 bg-Primary gap-2 flex items-center py-2 px-2 rounded-lg font-bold  hover:bg-Primary/90'>
         Get Started<FaArrowAltCircleRight className='text-center' /></a></button>
        </div>




</div>
{
isVideoplaying && (
  <div className='z-50 fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center'>
<div className='relative w-full flex items-center justify-center '>
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/jyscYZabhMo?si=CPGopsN20spPbq0i" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
    </iframe>
    <button onClick={handleClose}
    className='absolute top-4 right-4 text-white text-4xl cursor-pointer'
    ><GiCrossMark />
</button>
  </div>



  </div>
)}
</div>
  </div>
  )
}

export default About