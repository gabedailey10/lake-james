import React from 'react';
import { Nav } from '../../../components/Nav';
import { Footer } from '../../../components/Footer';
import ImageGrid from '../../../components/ImageGrid';

// Sample image URLs for filler content
const images = [
  
  { src: '/bj1.jpeg', alt: 'bj1' },
  { src: '/bj2.jpeg', alt: 'bj2' },
  { src: '/bj3.jpeg', alt: 'bj3' },
  { src: '/bj4.jpeg', alt: 'bj4' },
  { src: '/bj5.jpeg', alt: 'bj5' },
  { src: '/bj6.jpeg', alt: 'bj6' },
  { src: '/bj7.jpeg', alt: 'bj7' },
  { src: '/bj8.jpeg', alt: 'bj8' },
  { src: '/bj9.jpeg', alt: 'bj9' },
  { src: '/tyler.jpeg', alt: 'ty' },
  { src: '/craig.jpeg', alt: 'craig' },
  { src: '/band.jpeg', alt: 'band1' },
  
];

const PastEvents: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Nav />
      <header className='w-full bg-cover bg-center bg-custom-nets mb-16'>
        <div className='bg-black bg-opacity-50 w-full py-20 text-center'>
          <h1 className='font-bold text-4xl text-white'>Bones Jones</h1>
        </div>
      </header>
      <ImageGrid images={images} />
      <Footer />
    </div>
  );
};

export default PastEvents;
