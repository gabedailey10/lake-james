import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/router";
import classNames from "classnames";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Determine if the current path is the one where the text color should be different
  const isDifferentPage = pathname === "/about"; // Change "/about" to the route where you want the different text color

  return (
    <div className="w-full relative pb-8 pt-4 z-50">
      <ul className={classNames("flex justify-between items-center px-4 text-lg font-bold", { "text-black": !isDifferentPage, "text-white": isDifferentPage })}>
        <li>
          <Link href="/">
          <Image alt="logo" src="/logoLJP.jpeg" width={60} height={40} />
          </Link>
        </li>
        <li className="hidden md:block">
          <Link href="/about">About</Link>
        </li>
        <li className="hidden md:block">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className="hidden md:block">
        <a
                href="https://www.facebook.com/profile.php?id=100094143582107"
                target="_blank"
                rel="noopener noreferrer"
              >
          <FaFacebook size={30} />
          </a>
        </li>
        <li className="hidden md:block">
          <Button
            asChild
            className="text-lg bg-gradient-to-r from-violet-600 to-indigo-600"
          >
            <a
              href="https://app.courtreserve.com/Online/Events/List/9834"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve a court
            </a>
          </Button>
        </li>
        <li className="md:hidden">
          <button onClick={toggleMenu}>
            <GiHamburgerMenu size={24} />
          </button>
        </li>
      </ul>
      <div
        className={`fixed top-0 right-0 w-2/3 h-screen bg-slate-400 text-white flex items-center flex-col px-4 py-2 transition-transform duration-300 ease-in-out justify-center text-center${
          isOpen ? " transform translate-x-0" : " transform translate-x-full"
        }`}
      >
        <ul>
          <li className="py-8 ml-4 text-lg font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="py-8 ml-4 text-lg font-bold">
            <Link href="/About">About</Link>
          </li>
          <li className="py-8 ml-4 text-lg font-bold">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="py-8 ml-4 text-lg font-bold">
            <FaFacebook size={30} />
          </li>
          <li className="py-8 ml-2">
            <Button
              asChild
              className="text-md bg-gradient-to-r from-violet-600 to-indigo-600"
            >
              <a
                href="https://app.courtreserve.com/Online/Events/List/9834"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve a court
              </a>
            </Button>
          </li>
        </ul>
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white mt-6"
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>
    </div>
  );
};

export { Nav };
