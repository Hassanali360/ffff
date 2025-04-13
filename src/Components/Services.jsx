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
  <h1 className="text-4xl font-bold font-Secoundary text-heroBg">Our Services</h1>
  <p className="sm:w-full md:w-1/2 mx-auto">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat illum dicta animi! In, accusantium rerum ullam consequuntur labore animi? Fugiat!
  </p>
</div>
      </div>

      {/* react Category */}
      <div className='py-12 mx-auto md:w-[1100px]  '>
      <Tabs>
    <TabList className="flex flex-wrap justify-between md:gap-8">
      <Tab>E-Commerce & Online Shopping </Tab>
      <Tab>Petroleum Trading</Tab>
      <Tab>Cash & Carry Business</Tab>
      <Tab>Property Investment & Real Estate</Tab>
      <Tab>Travel & Tourism Services</Tab>
      <Tab>Garment & Textile Trading</Tab>
      <Tab>Cryptocurrency Trading & Investment</Tab>
    </TabList>

    {/* E-Commerce */}
    <TabPanel className=" mt-7">
      <div className='flex flex-col md:flex-row gap-4'>   
           <div className='md:w-1/2 bg-white rounded-lg p-12 font-Secoundary'>
        <h3 className='text-3xl font-semibold text-heroBg mb-4 '>E-Commerce & Online Shopping</h3>
        <p className='mb-8'>Online retail platform offering a wide range of consumer goods.</p>
        <h4>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Creation of virtual malls, digital shops, and online catalogs.</li>
          <li>E-commerce solutions for B2B, B2C, and C2C markets.</li>
          <li>Integration of secure payment gateways and logistics support.</li>
        </ul>
      </div>
      <div className='md:w-1/2 h-full'> <img src={serviceImg1} alt="" className='w-full h-auto rounded-2xl object-cover' /></div>
      </div>
    </TabPanel>

    {/* Petroleum Trading */}
    <TabPanel className=" mt-7">
      <div className='flex flex-col md:flex-row gap-4'>   
           <div className='md:w-1/2 bg-white rounded-lg p-12 font-Secoundary'>
        <h3 className='text-3xl font-semibold text-heroBg mb-4 '>Petroleum Trading</h3>
        <p className='mb-8'>Import and distribution of petroleum products across Pakistan.</p>
        <h4>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Establishment of fuel stations with advanced infrastructure.</li>
          <li>Development of supply chain solutions for petroleum companies.</li>
        </ul>
      </div>
      <div className='md:w-1/2 h-full'> <img src={serviceImg2} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover' /></div>
      </div>
    </TabPanel>

    {/* Cash & Carry Business */}
    <TabPanel className=" mt-7">
      <div className='flex flex-col md:flex-row gap-4'>   
           <div className='md:w-1/2 bg-white rounded-lg p-12 font-Secoundary'>
        <h3 className='text-3xl font-semibold text-heroBg mb-4 '>Cash & Carry Business</h3>
        <p className='mb-8'>Large-scale wholesale and retail operations.</p>
        <h4>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Distribution of FMCG products, household goods, and business essentials.</li>
          <li>Expansion into the global cash & carry industry.</li>
        </ul>
      </div>
      <div className='md:w-1/2 h-full'> <img src={serviceImg3} alt="" className='w-full h-auto rounded-2xl object-cover' /></div>
      </div>
    </TabPanel>

    {/* Property Investment & Real Estate */}
    <TabPanel className=" mt-7">
      <div className='flex flex-col md:flex-row gap-4'>   
           <div className='md:w-1/2 bg-white rounded-lg p-12 font-Secoundary'>
        <h3 className='text-3xl font-semibold text-heroBg mb-4 '>Property Investment & Real Estate</h3>
        <p className='mb-8'>Investment in residential and commercial properties.</p>
        <h4>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Real estate consultation & property management services.</li>
          <li>Development of smart and sustainable housing projects.</li>
        </ul>
      </div>
      <div className='md:w-1/2 h-full'> <img src={serviceImg4} alt="" className='w-full h-auto rounded-2xl object-cover' /></div>
      </div>
    </TabPanel>

    {/* Travel & Tourism Services */}
    <TabPanel className=" mt-7">
      <div className='flex flex-col md:flex-row gap-4'>   
           <div className='md:w-1/2 bg-white rounded-lg p-12 font-Secoundary'>
        <h3 className='text-3xl font-semibold text-heroBg mb-4 '>Travel & Tourism Services</h3>
        <p className='mb-8'>Customized travel packages, hotel bookings, ticketing services.</p>
        <h4>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Corporate and leisure travel management.</li>
          <li>Expansion into global tourism market.</li>
        </ul>
      </div>
      <div className='md:w-1/2 h-full'> <img src={serviceImg1} alt="" className='w-full h-auto rounded-2xl object-cover' /></div>
      </div>
    </TabPanel>

    {/* Garment & Textile Trading */}
    <TabPanel className=" mt-7">
      <div className='flex flex-col md:flex-row gap-4'>   
           <div className='md:w-1/2 bg-white rounded-lg p-12 font-Secoundary'>
        <h3 className='text-3xl font-semibold text-heroBg mb-4 '>Garment & Textile Trading</h3>
        <p className='mb-8'>Wholesale and retail trading of garments and textiles.</p>
        <h4>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Import/export of fashion apparel, fabrics, and accessories.</li>
          <li>Collaboration with international textile manufacturers.</li>
        </ul>
      </div>
      <div className='md:w-1/2 h-full'> <img src={serviceImg2} alt="" className='w-full md:h-[446px] h-auto rounded-2xl object-cover' /></div>
      </div>
    </TabPanel>

    {/* Cryptocurrency Trading & Investment */}
    <TabPanel className=" mt-7">
      <div className='flex flex-col md:flex-row gap-4'>   
           <div className='md:w-1/2 bg-white rounded-lg p-12 font-Secoundary'>
        <h3 className='text-3xl font-semibold text-heroBg mb-4 '>Cryptocurrency Trading & Investment</h3>
        <p className='mb-8'>Legally compliant crypto trading and investment solutions.</p>
        <h4>Benefits</h4>
        <ul className='list-disc list-inside space-y-3'>
          <li>Expert advisory services on blockchain & digital currency markets.</li>
          <li>Secure and transparent crypto asset management.</li>
        </ul>
      </div>
      <div className='md:w-1/2 h-full'> <img src={serviceImg3} alt="" className='w-full h-auto rounded-2xl object-cover' /></div>
      </div>
    </TabPanel>
  </Tabs>
      </div>
    </div>
  )
}

export default Services;
