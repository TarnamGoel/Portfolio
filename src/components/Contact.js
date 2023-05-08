import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const Contact = () => {
  return(
    <section className='py-16 lg:section' id='contact'>
      <div class="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[99px] leading-none mb-12'>Let's Work <br/> together!</h2>
            </div>
          </div>
          {/* form */}
          <form className='flex-1'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-accent focus:border-accent transition-all' type='text' placeholder='Your Name'/>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-accent focus:border-accent transition-all' type='text' placeholder='Your Email'/>
            <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-accent focus:border-accent transition-all resize-none mb-12' placeholder='Your Message'></textarea>
            <button className='btn btn-lg'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
