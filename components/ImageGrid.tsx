import React from 'react';
import Image from 'next/image';

interface ImageData {
  src: string;
  alt: string;
}

interface ImageGridProps {
  images: ImageData[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-1">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-64">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
