import React from "react";
import { Nav } from "../../components/Nav";
import { Button } from "../../components/Button";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import Link from "next/link";

const Index = () => {
  return (
    <div className="w-screen flex flex-col">
      <div className="w-screen h-screen bg-custom-grey bg-cover bg-centern flex flex-col">
        <Nav />
        <div className="my-32 h-1/4 flex flex-col justify-center items-center text-center py-8">
          <h1 className="text-4xl font-serif">Welcome To</h1>
          <h2 className="text-4xl font-serif mb-4">Lake James Pickleball</h2>
          <p className="px-10 font-serif">
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
            <Link href="/about">
              Learn More
              </Link>
          </Button>
        </div>
      </div>
      <div className="h-full flex justify-center items-center flex-col text-center">
        <Image src="/dinking1.jpeg" alt="dinking1" height={900} width={600} layout="responsive"/>
        <p className="text-4xl font-serif my-16">
          The best Pickleball community at Lake James.
        </p>
        <p className="font-serif my-16 text-3xl">
          Our courts offer an experience like no other.
        </p>
        <Image
          src="/dronecourts.jpeg"
          alt="dronecourts"
          height={900}
          width={600}
          layout="responsive"
        />
        <ul className="flex flex-row justify-between w-full px-8 mt-8 mb-16">
          <li className="flex flex-col my-4 w-1/4 py-2 items-center">
            <Image
              src="/pickleicon1.jpg"
              alt="paddlelogo"
              height={50}
              width={50}
            />
            <p className="text-lg">Engaging community at all skill levels.</p>
          </li>
          <li className="flex flex-col my-4 py-2 w-1/4 items-center">
            <Image
              src="/courticon.jpg"
              alt="courticon"
              height={50}
              width={50}
            />
            <p className="text-lg">Well maintained and high quality courts.</p>
          </li>
          <li className="flex flex-col my-4 py-2 w-1/4 items-center">
            <Image src="/comm.jpg" alt="comm" height={50} width={50} />
            <p className="text-lg">
              Community events, live music, and more!
            </p>
          </li>
        </ul>
        <div className="flex flex-col justify-center items-center my-4 ">
          <div className="shadow-lg">
            <Image src="/bj.jpeg" alt="bj" width={600} height={900} layout="responsive" />
          </div>
          <h1 className="text-xl font-bold my-10">
            Learn more about Bones Jones{" "}
          </h1>
          <a
            href="https://bonesjones.com/#menu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>View the Menu</Button>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Index;
