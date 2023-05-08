import React from 'react';
import CountUp from 'react-countup/';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  })
  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div>
        {/* img */}
        <div className='flex-1 bg-about bg-contain bg-no-repeat h-[340px] mix-blend-lighten bg-top'></div>
        {/* text */}
        <div className='flex-1'>
          <h2 className='h2 '>About me.</h2>
          <motion.h3 className='mb-10'>
          As an undergraduate student with a diverse set of skills in AIML engineering, data science, web 
    development, and blockchain development, I have a lot to offer in today's rapidly evolving 
    technological landscape. Working at Clickites I am mastering the art of machine learning and artificial 
    intelligence. At Clickites, I am responsible for developing effective codes that
    can find out emails of leads effectively, I am also adept building complex AI algorithms and models 
    that can make prediction for our customer and offer them a better experinence over our product. In 
    addition to AIML, I have a strong background in Web development. My skills include HTML, CSS, JavaScript,
    React, PHP, MySQL. As a web developer, I consider my responsiblity to make web apps that are visually
    appealing, easy to use and highly optimized. I am well-versed with data science as well, being skilled in 
    statistical modelling, exploratory data analysis, machine learning, data visualization and the
    experinence of working with raw data, makes me valuable asset. Last but not the least, as Blockchain
    Developer, I have a good understanding of decentralized applications. I also have experinence working
    with smart contracts, proof-of-work, proof-of-resourse and other consensus algorithms. 
          </motion.h3>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              
            </div>
            <div>
              
            </div>
          </div>
          </div> 
      </div>
    </div>
    
  </section>;
};

export default About;
