import React from "react";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import GalleryCarousel from "../../components/GalleryCarousel";
import Link from "next/link";

const gallery = () => {
  return (
    <div className="min-h-screen w-full bg-white bg-cover flex flex-col items-center">
      <Nav />
      <header className="w-full bg-cover bg-center bg-custom-nets">
        <div className="bg-black bg-opacity-50 w-full py-20 text-center">
          <h1 className="font-bold text-4xl text-white">Gallery</h1>
        </div>
      </header>
      <main className="w-full flex flex-col items-center py-10 px-4">
        <section className="w-full max-w-6xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Featured Images</h2>
          <p className="text-lg mb-8">
            Explore our collection of featured images from various categories.
          </p>
          <GalleryCarousel />
        </section>
        <section className="w-full max-w-6xl mb-10">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/gallery/openplay">
              <div className="relative p-6 bg-custom-dink bg-cover bg-center rounded-lg text-center h-36 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white">
                    Open Play
                  </h3>
                </div>
              </div>
            </Link>
            <Link href="/gallery/bonesjones">
              <div className="relative p-6 bg-custom-band bg-center bg-cover rounded-lg text-center h-36 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white">
                    Bones Jones
                  </h3>
                </div>
              </div>
            </Link>
            <Link href="/gallery/pastevents">
              <div className="relative p-6 bg-custom-event bg-center bg-cover rounded-lg text-center h-36 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white">
                    Past Events
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default gallery;
