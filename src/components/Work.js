import React from 'react';

import Img1 from '../assets/Certificate.jpg';
const Work = () => {
  return(
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-6 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight font-bold text-accent capitalize'>My Latest <br/> Work</h2>
              <p className=''>
                <span className='font-bold mb-0'>Wrote a research paper to propose idea of maintaining land registry documents using Blockchain. </span>
                Blockchain-based land registries are electronic databases that track and record information 
about property ownership.Blockchain ensures that all transactions are accurately recorded and cannot be 
altered by employing a decentralised ,secure ledger.  A land register powered by blockchain technology can speed up the 
transfer of property , benefiting both buyers and sellers. Overall, the tracking and management of property 
ownership could be completely transformed by the application of blockchain technology in land registries.
              </p>
              {/* <button className='btn btn-sm'>View all projects</button> */}
            </div>
            {/* image */}
            <div className='group relative overflow-hidden w-2/4 border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Research Paper</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span  className='text-3xl text-white'>Blockchain</span>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
};

export default Work;
