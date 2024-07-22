import React from 'react';
import { Nav } from '../../components/Nav';

const Contact = () => {
  return (
    <div className='flex flex-col'>
        <Nav />
      <div className='aspect-w-16 aspect-h-9 bg-custom-2'>
        <div className='bg-custom-2 bg-cover bg-center w-full h-full flex items-center justify-center'>
            <div className='bg-white w-1/2 h-60'>
                <h1>Stay in Touch</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
