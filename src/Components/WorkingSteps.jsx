import React from 'react';

const WorkingSteps = () => {
  return (
    <div className='relative bg-cover bg-center py-[450px] md:py-[300px] h-full bg-working-img'>
      <div className='absolute inset-0 bg-heroBg bg-opacity-85'>
        <div className='container mx-auto relative px-4 py-20'>
          <div className='text-white text-center mb-20'>
            <h2 className='text-4xl font-bold font-Secoundary mb-4'>How it Works</h2>
            <p className='text-lg md:w-1/2 w-full mx-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt mollitia deleniti aperiam iusto. Dicta soluta accusantium aspernatur hic aliquid!
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-8 md:w-4/5 mx-auto'>
            <div className='flex-1 bg-white text-center rounded-lg p-6 shadow-lg'>
              <div className='text-Primary text-2xl font-bold mb-4'>1</div>
              <div className='text-lg font-semibold mb-2'>Signup Your Account</div>
              <p className='mt-2'>Description of the first step in the process.</p>
            </div>
            <div className='flex-1 bg-white text-center rounded-lg p-6 shadow-lg'>
              <div className='text-Primary text-2xl font-bold mb-4'>2</div>
              <div className='text-lg font-semibold mb-2'>Fill up the form</div>
              <p className='mt-2'>Don't gie spam infomation.</p>
            </div>
            <div className='flex-1 bg-white text-center rounded-lg p-6 shadow-lg'>
              <div className='text-Primary text-2xl font-bold mb-4'>3</div>
              <div className='text-lg font-semibold mb-2'>We will reach you out</div>
              <p className='mt-2'>Description of the third step in the process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkingSteps;
