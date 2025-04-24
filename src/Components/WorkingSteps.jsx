import React from 'react';

const WorkingSteps = () => {
  return (
    <div className='relative bg-cover bg-center py-[450px] md:py-[300px] h-full bg-working-img'>
      <div className='absolute inset-0 bg-heroBg bg-opacity-85'>
        <div className='container mx-auto relative px-4 py-20'>
          <div className='text-white text-center mb-16'>
            <h2 className='text-4xl font-bold font-Secoundary mb-4'>Our Core Values</h2>
            <p className='text-lg md:w-2/3 w-full mx-auto'>
              At Royal Friends Trading, our business practices are guided by the following core values:
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:w-4/5 mx-auto text-white'>
            <div className='bg-white text-black rounded-lg p-6 shadow-lg'>
              <h3 className='text-xl font-semibold mb-2'>Integrity</h3>
              <p>We conduct our business with honesty, transparency, and ethical standards.</p>
            </div>
            <div className='bg-white text-black rounded-lg p-6 shadow-lg'>
              <h3 className='text-xl font-semibold mb-2'>Customer-Centric Approach</h3>
              <p>We prioritize customer satisfaction and build strong relationships based on trust.</p>
            </div>
            <div className='bg-white text-black rounded-lg p-6 shadow-lg'>
              <h3 className='text-xl font-semibold mb-2'>Innovation</h3>
              <p>We embrace change, adopt modern technologies, and continuously improve our services.</p>
            </div>
            <div className='bg-white text-black rounded-lg p-6 shadow-lg'>
              <h3 className='text-xl font-semibold mb-2'>Sustainability</h3>
              <p>We ensure responsible trading practices that contribute to a better future.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkingSteps;
