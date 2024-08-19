import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from "../assets/service1.webp"
import serviceImg2 from "../assets/service2.webp"
import serviceImg3 from "../assets/service3.webp"
import serviceImg4 from "../assets/service4.webp"

const Services = () => {
  return (
    <div className='bg-[#f7f8fc]' id='services'>
      <div className='pt-28 px-4 container mx-auto' >
      <div className="text-center space-y-5">
  <h1 className="text-4xl font-bold font-Secoundary text-heroBg">We Can Do Together</h1>
  <p className="sm:w-full md:w-1/2 mx-auto">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat illum dicta animi! In, accusantium rerum ullam consequuntur labore animi? Fugiat!
  </p>
</div>


      </div>
      {/* react Category */}

      <div className='py-12 mx-auto md:w-[1100px]  '>
      <Tabs>
    <TabList className="flex flex-wrap justify-between md:gap-8">
      <Tab>Couple Counseling </Tab>
      <Tab>Parenting Skills</Tab>
      <Tab>Feeling Stuck</Tab>
      <Tab>Feel Confidence</Tab>
    </TabList>
    {/* Couple Counseling */}
    <TabPanel className=" mt-7">
      <div className='flex flex-col md:flex-row gap-4'>   
           <div className='md:w-1/2 bg-white rounded-lg p-12 font-Secoundary'>
        <h3 className='text-3xl font-semibold text-Primary mb-4 '>Couple Counseling </h3>
        <p className='mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facilis aliquam est tempora assumenda nemo nesciunt?</p>
        <h4>Benefits</h4>
        <ul className='   list-disc list-inside space-y-3'>
          <li>Understanding of Relationship Dynamics</li>
          <li>Understanding of Relationship Dynamics</li>
          <li>Understanding of Relationship Dynamics</li>
          </ul>
      </div>
      <div className='md:w-1/2 h-full '> <img src={serviceImg1} alt="" className='w-full h-auto rounded-2xl object-cover' /></div>
      </div>
      </TabPanel>

    {/* Parenting Skills */}
    <TabPanel className=" mt-7">
      <div className='flex flex-col md:flex-row gap-4'>   
           <div className='md:w-1/2 bg-white rounded-lg p-12 font-Secoundary'>
        <h3 className='text-3xl font-semibold text-Primary mb-4 '>Parenting Skills </h3>
        <p className='mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facilis aliquam est tempora assumenda nemo nesciunt?</p>
        <h4>Benefits</h4>
        <ul className='   list-disc list-inside space-y-3'>
          <li>Understanding of Relationship Dynamics</li>
          <li>Understanding of Relationship Dynamics</li>
          <li>Understanding of Relationship Dynamics</li>
          </ul>
      </div>
      <div className='md:w-1/2 h-full '> <img src={serviceImg2} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover' /></div>
      </div>
      </TabPanel>
    {/* Feeling Stuck */}
    <TabPanel className=" mt-7">
      <div className='flex flex-col md:flex-row gap-4'>   
           <div className='md:w-1/2 bg-white rounded-lg p-12 font-Secoundary'>
        <h3 className='text-3xl font-semibold text-Primary mb-4 '>Feeling Stucked</h3>
        <p className='mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facilis aliquam est tempora assumenda nemo nesciunt?</p>
        <h4>Benefits</h4>
        <ul className='   list-disc list-inside space-y-3'>
          <li>Understanding of Relationship Dynamics</li>
          <li>Understanding of Relationship Dynamics</li>
          <li>Understanding of Relationship Dynamics</li>
          </ul>
      </div>
      <div className='md:w-1/2 h-full '> <img src={serviceImg3} alt="" className='w-full h-auto rounded-2xl object-cover' /></div>
      </div>
      </TabPanel>
    {/* Feel Confidence */}
    <TabPanel className=" mt-7">
      <div className='flex flex-col md:flex-row gap-4'>   
           <div className='md:w-1/2 bg-white rounded-lg p-12 font-Secoundary'>
        <h3 className='text-3xl font-semibold text-Primary mb-4 '>Feel Confidence </h3>
        <p className='mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facilis aliquam est tempora assumenda nemo nesciunt?</p>
        <h4>Benefits</h4>
        <ul className='   list-disc list-inside space-y-3'>
          <li>Understanding of Relationship Dynamics</li>
          <li>Understanding of Relationship Dynamics</li>
          <li>Understanding of Relationship Dynamics</li>
          </ul>
      </div>
      <div className='md:w-1/2 h-full '> <img src={serviceImg4} alt="" className='w-full h-auto rounded-2xl object-cover' /></div>
      </div>
      </TabPanel>
  </Tabs>
      </div>


    </div>

   


    
  )
}

export default Services