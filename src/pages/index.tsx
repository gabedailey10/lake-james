import React from "react";
import { Nav } from "../../components/Nav";
import { Button } from "../../components/Button";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import Link from "next/link";
import Memberships from "../../components/Memberships";

const Index = () => {
  return (
    <div className="w-screen flex flex-col">
      <div className="relative w-screen h-screen bg-custom-bg bg-cover bg-center flex flex-col">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <Nav />
        <div className="relative z-10 my-32 h-1/4 flex flex-col justify-center items-center text-center py-8 md:w-1/2 mx-auto">
          <h1 className="text-4xl font-serif text-white mt-8 md:mt-0">
            Welcome To
          </h1>
          <h2 className="text-4xl font-serif mb-4 text-white">
            Lake James Pickleball
          </h2>
          <p className="  font-serif text-lg text-white">
            Nestled conveniently behind Bones Jones restaurant and bar,
            PowerHouse Pickleball offers an engaging experience for pickleball
            enthusiasts of all levels. Our facility maintains 8 courts,
            providing ample space for both casual play and competitive matches.
          </p>
          <Button
            asChild
            className="text-lg bg-gradient-to-r from-violet-600 to-indigo-600 mt-16"
          >
            <a
              href="https://app.courtreserve.com/Online/Events/List/9834"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve a court
            </a>
          </Button>
          <Button
            asChild
            className="text-lg bg-gradient-to-r from-violet-600 to-indigo-600 mt-16"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
      <div className="h-full flex justify-center items-center flex-col text-center px-4 bg-gray-200">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 my-16">
          <div className="flex flex-col md:w-1/2">
            <p className="text-4xl md:text-7xl font-serif">
              Lake James{" "}
              <span className="text-yellow-600">
                <br className="md:hidden" />
                Top Tier Pickleball Club
              </span>
            </p>
            <p className="text-xl">
              Whether you&apos;re a seasoned player or new to the game, Lake
              James Pickleball offers an engaging and vibrant community where
              you can enjoy the sport, make new friends, and participate in a
              variety of events. 
            </p>
          </div>
          <div className="w-1/2 md:w-1/3 mt-8 md:mt-0">
            <Image
              src="/dinking1.jpeg"
              alt="dinking1"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
        </div>
        <p className="font-serif my-8 text-3xl md:text-7xl">We Offer:</p>
        <div className=" w-full relative flex flex-col md:flex-row justify-center items-center bg-custom-courts bg-cover bg-center h-screen px-6 ">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative m-6 z-10 flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/pickleicon1.jpg"
              alt="paddlelogo"
              height={90}
              width={90}
            />
            <p className="text-lg md:text-2xl mt-4">
              Engaging community at all skill levels.
            </p>
          </div>
          <div className="relative z-10 m-6 flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/courticon.jpg"
              alt="courticon"
              height={90}
              width={90}
            />
            <p className="text-lg md:text-2xl mt-4">
              Well maintained and high quality courts.
            </p>
          </div>
          <div className="relative z-10 m-6 flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <Image src="/comm.jpg" alt="comm" height={90} width={90} />
            <p className="text-lg md:text-2xl mt-4">
              Community events, live music, and more!
            </p>
          </div>
        </div>
        <div className="flex w-full items-center h-full "></div>
        <Memberships />
        <div className="flex flex-col justify-center items-center my-4 ">
          <div className="my-6">
            <h1 className="text-xl font-bold my-10 text-xxl md:text-3xl">
              Learn more about Bones Jones{" "}
            </h1>
            <a
              href="https://bonesjones.com/#menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="text-xl bg-gradient-to-r from-violet-600 to-indigo-600">
                View the Menu
              </Button>
            </a>
          </div>
          <div className="shadow-lg">
            <Image
              src="/bj.jpeg"
              alt="bj"
              width={600}
              height={900}
              layout="responsive"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
