import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: "Artificial Intelligence & Machine Learning",
    description:"Develops computer systems that can perform tasks that normally reduces human efforts.",
    link:'Learn More',
  },
  {
    name: "Web Development",
    description:"I code, design and optimize the website for users and search engines.",
    link:'Learn More',
  },
  {
    name: "Blockchain Development",
    description:"It involves creating decentralized digital ledgers for recording transactions and ensuring data security and transparency through cryptography.",
    link:'Learn More',
  }
]

const Services = () => {
  return (
    <div className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex-1 mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6 font-bold text-4xl'>What I Do?</h2>
            <h3 className='h3 max-w-[455px] text-m mb-6 font-normal'>
            I am a passionate AIML Engineer, Data Scientist, Web Developer and Blockchain Developer.
            </h3>
            <a href='https://github.com/tarnamgoel'><button className='btn btn-sm mb-20'>See my work</button></a>
          </div>
          {/* services */}
          <div className='flex-1'>
            {/* services list */}
            <div>
              {services.map((service,index)=>{
                const {name, description, link} = service;
                return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>

                  {/* links */}
                  <div>
                    
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
