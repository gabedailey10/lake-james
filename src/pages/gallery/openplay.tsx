import React from 'react';
import { Nav } from '../../../components/Nav';
import { Footer } from '../../../components/Footer';
import ImageGrid from '../../../components/ImageGrid';

// Sample image URLs for filler content
const images = [
  { src: '/pose1.jpeg', alt: 'pose1' },
  { src: '/dinking1.jpeg', alt: 'dinking1' },
  { src: '/dronecourts.jpeg', alt: 'dronecourts' },
  { src: '/dinking3.jpeg', alt: 'dinking3' },
  { src: '/dinking4.jpeg', alt: 'dinking4' },
  { src: '/david.jpeg', alt: 'david' },
  { src: '/group1.jpeg', alt: 'group1' },
  { src: '/group2.jpeg', alt: 'group2' },
  { src: '/pose3.jpeg', alt: 'pose3' },
  { src: '/pose4.jpeg', alt: 'pose4' },
  { src: '/pose5.jpeg', alt: 'pose5' },
  { src: '/pose6.jpeg', alt: 'pose6' },
  { src: '/pose7.jpeg', alt: 'pose7' },
  { src: '/pose8.jpeg', alt: 'pose8' },
  { src: '/pose9.jpeg', alt: 'pose9' },
];

const OpenPlay: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <header className='w-full bg-cover bg-center bg-custom-nets mb-16'>
        <div className='bg-black bg-opacity-50 w-full pb-20 text-center'>
        <Nav />
          <h1 className='font-bold text-4xl text-white'>Open Play</h1>
        </div>
      </header>
      <ImageGrid images={images} />
      <Footer />
    </div>
  );
};

export default OpenPlay;
