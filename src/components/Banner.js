import React from 'react';

//images
import Image from '../assets/blobanimation.svg'
//icons
import {FaGithub, FaYoutube, FaDribble, FaLinkedin} from 'react-icons/fa'
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants';

const Banner = () => {
  return <section className='section pt-0' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
        {/* text */}
        <div className='w-5/6'>
          <motion.h1 variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.7}} classname='text-lg font-bold'>Tarnam <span>Goel</span></motion.h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className=' text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              "Student",
              2000,
              "Developer",
              2000,
              "Freelancer",
              2000,
            ]}
              speed={50}
              className=' text-accent'
              wrapper='span'
              repeat={Infinity}
            />
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a href='#contact'><button className='btn btn-lg'>Contact Me</button></a>
              <div >
                <a href='#' className='text-gradient btn-link'>
                  My Profiles
                </a>
              <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
              <a href='https://www.youtube.com/@tarnamgoel7840'className=''>
                <FaYoutube/>
              </a>
              <a href='https://github.com/TarnamGoel'>
                <FaGithub/>
              </a>
              <a href='https://www.linkedin.com/in/coderbyheart/'>
                <FaLinkedin/>
              </a>
            </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* image  */}
        <div className='justify-right'>
          <img src={Image} alt='Blob' />
        </div>
        
        
      </div>
    </div>
  </section>;
};

export default Banner;
