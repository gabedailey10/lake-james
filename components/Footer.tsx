import React from "react";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full text-black bg-slate-600 py-8 mt-8">
      <div className="flex flex-col items-center">
        <ul className="flex flex-col items-center space-y-4 text-white">
          <li className="text-lg font-bold">
            <Link href="/About">About</Link>
          </li>
          <li className="text-lg font-bold">
            <a
              href="https://app.courtreserve.com/Online/Events/List/9834"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve a Court
            </a>
          </li>
          <li className="text-lg font-bold">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} color="white"/>
          </a>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-8 w-full text-center">
        <p className=" mt-4 text-white">
          © 2024 PowerHouse Pickleball. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export { Footer };
