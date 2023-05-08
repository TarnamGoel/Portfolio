import React from 'react';

// images
import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8' >
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <h1 className='text-gradient text-4xl'>PORTFOLIO.</h1>
        </a>
        <a href='#contact' className='scroll-smooth'><button className='btn btn-sm'>Work with me</button></a>
      </div>
    </div>
  </header>;
};

export default Header;
