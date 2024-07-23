import React from 'react';
import { Nav } from '../../../components/Nav';
import { Footer } from '../../../components/Footer';
import ImageGrid from '../../../components/ImageGrid';

// Sample image URLs for filler content
const images = [
  
  { src: '/event1.jpeg', alt: 'event1' },
  { src: '/event2.jpeg', alt: 'event2' },
  { src: '/event3.jpeg', alt: 'event3' },
  { src: '/event4.jpeg', alt: 'event4' },
  { src: '/event5.jpeg', alt: 'event5' },
  { src: '/event6.jpeg', alt: 'event6' },
  { src: '/event7.jpeg', alt: 'event7' },
  { src: '/event8.jpeg', alt: 'event8' },
  { src: '/event9.jpeg', alt: 'event9' },
  { src: '/event10.jpeg', alt: 'evnet10' },
  { src: '/event11.jpeg', alt: 'event11' },
  { src: '/event12.jpeg', alt: 'event12' },
];

const PastEvents: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <header className='w-full bg-cover bg-center bg-custom-nets mb-16'>
        <div className='bg-black bg-opacity-50 w-full pb-20 text-center'>
        <Nav />
          <h1 className='font-bold text-4xl text-white'>Past Events</h1>
        </div>
      </header>
      <ImageGrid images={images} />
      <Footer />
    </div>
  );
};

export default PastEvents;
