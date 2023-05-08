import React from 'react';
import {motion,useScroll } from 'framer-motion';

const Details = ({position,company,companyLink,time,work})=>{
    return <li className=' first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-left justify-between'>
        <liIcon/>
        <div>
            <h3 className='capitalize font-bold text-xl'>
                {position}&nbsp;<a href={companyLink}>@{company}</a></h3>
                <span className='capitalize font-medium text-l italic mb-16'>
                    {time}
                </span>
                <p className='font-small w-full'>
                    {work}
                </p>
            
        </div>
    </li>
}

const Experience = () => {
//     const ref = useRef(none);
//     const {scrollYProgress}=useScroll({
//         target: ref,
//         offset: ["start end","center start"]
// })
  return <div className='section' id='experience'>
    <div className='container mx-auto justify-between'>
        <h2 className='h2'> Experience</h2>
        <div className='w-[75%] mx-auto relative justify-between'>
        <motion.div className='absolute left-8 top-0 w-[4px] h-full bg-white origin-top justify-left'/>
            <ul className='w-full flex flex-col items-start justify-left ml-4'>
                <Details
                    position="AIML Trainee" company="Clickites" 
                    companyLink="#" 
                    time="March 2023 - Present" 
                    // work="Working in team of automated webdesigns for developing new features, including 
                    // improoving the accuracy and relevance of lead results."
                />
                <Details
                    position="Data Science Intern" company="Oasis Infobyte" 
                    companyLink="#" 
                    time="Feb 2023 - March 2023" 
                    // work="Working in team of automated webdesigns for developing new features, including 
                    // improoving the accuracy and relevance of lead results."
                />
<Details
                    position="Business Analytics Intern" company="Sparks Foundation" 
                    companyLink="#" 
                    time="Jan 2023 - Feb 2023" 
                    // work="Working in team of automated webdesigns for developing new features, including 
                    // improoving the accuracy and relevance of lead results."
                />
            </ul>
        </div>
    </div>
  </div>;
};

export default Experience;
