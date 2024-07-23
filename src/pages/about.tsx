import React from "react";
import { Nav } from "../../components/Nav";
import { Button } from "../../components/Button";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <div className="relative bg-custom-2 bg-cover h-screen w-full flex flex-col items-center ">
        <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <Nav />
          <div className="flex text-center flex-col justify-center items-center mx-4 my-16">
            <h1 className="text-3xl text-white mb-2 font-bold font-serif">
              Fun is just around the corner
            </h1>
            <p className="text-white text-lg font-bold font-serif my-2">
              Learn more about our club by following these links
            </p>
            <a
              href="https://app.courtreserve.com/Online/Memberships/Index/9834"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="my-4 bg-sky-500">Memberships</Button>
            </a>
            <a
              href="https://app.courtreserve.com/Online/Calendar/Events/9834/Month"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="my-4 bg-sky-500">Reservations</Button>
            </a>
            
              <Button className="my-4 bg-sky-500"><Link href="/calendar">Events list</Link></Button>
            
            <a
              href="https://bonesjones.com/#menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="my-4 bg-sky-500">Bones Jones Menu</Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* New Location Info Section */}
      <div className="relative bg-gray-100 h-screen w-full flex flex-col items-center justify-center">
        <div className="text-center mx-4 h-4/5">
          <h1 className="text-4xl font-bold mb-4">Our Location</h1>
          <p className="text-lg mb-4">123 Powerhouse Road, Lake James, NC</p>
          <p className="text-lg mb-4">Open Daily: 8 AM - 8 PM</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092936!2d144.96305781531593!3d-37.81627917975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0b5c5b7b1!2sVictoria!5e0!3m2!1sen!2sau!4v1611818974543!5m2!1sen!2sau"
            
            loading="lazy"
            className="w-full h-4/5"
          ></iframe>
        </div>
      </div>

      <div className="w-full py-8 flex flex-col text-center items-center">
        <h1 className="text-3xl font-serif font-bold">Meet the Owners</h1>
        <div className="w-4/5 md:w-1/2 bg-white flex flex-col items-center my-5 p-4 bg-custom-grey shadow-xl">
          <div className="relative h-full w-full">
            <Image
              alt="craig"
              src="/craig.jpeg"
              height={300}
              width={300}
              layout="responsive"
            />
          </div>
          <h1 className="text-blue-950 font-mono font-bold mt-1">
            Craig Anisweski
          </h1>
          <p className="">
            After retiring to Lake James, I envisioned repurposing the old
            tennis courts on Powerhouse Road into pickleball courts. Partnering
            with Bones Jones, we combined great food with the social fun of
            pickleball. Join us for a game and some delicious food and drinks!
          </p>
        </div>
        <div className="w-4/5 md:w-1/2 bg-white flex flex-col items-center my-5 p-4 bg-custom-grey shadow-xl">
          <div className="relative h-full w-full">
            <Image
              alt="tyler"
              src="/tyler.jpeg"
              height={300}
              width={300}
              layout="responsive"
            />
          </div>
          <h1 className="text-blue-950 font-mono font-bold mt-1">
            Tyler Jones
          </h1>
          <p className="">
            I’m Bones, the founder of “Bones Jones Burgers and Butchery.” When I
            saw an exciting opportunity to bring people together, I partnered
            with Craig to transform the old tennis courts behind my restaurant
            into pickleball courts. Now, I love the game and the sense of
            community it fosters. Join us for a match and enjoy some delicious
            food!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
