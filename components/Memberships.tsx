import React from "react";
import Link from "next/link";
import { Button } from "./Button";

const memberships = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="flex-grow flex flex-col items-center justify-center bg-cover bg-custom-grey text-white">
        <h1 className="text-5xl font-bold mb-8 text-slate-700 mt-10">
          Membership Plans
        </h1>
        <p className="text-xl text-slate-700 mb-16 mx-6 text-center w-1/2">
          At Lake James Pickleball, you can enjoy our activities and programs at
          our location without needing a paid membership. However, we offer a
          membership option for those looking to enjoy discounted rates on Open
          Play sessions. Simply follow the links below or find us on{" "}
          <a
            className="text-blue-700 hover:underline"
            href="https://app.courtreserve.com/Online/Events/List/9834"
            target="_blank"
            rel="noopener noreferrer"
          >
            Court Reserve
          </a>
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0 mb-24 w-full max-w-screen-lg">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center w-full md:w-1/2 flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-4">
              Monthly Membership-Anniversary Special
            </h2>
            <p className="mb-4">
              Monthly membership includes open play on any available court for just $20 a month.
            </p>
            <p className="text-4xl font-bold mb-4">
              $20<span className="text-xl">/month</span>
            </p>
            <div className="mt-auto">
              <Button
                asChild
                className="text-lg bg-gradient-to-r from-violet-600 to-indigo-600"
              >
                <a
                  href="https://app.courtreserve.com/Online/Events/List/9834"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </Button>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center w-full md:w-1/2 flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-4">
              Pay As You Play- Eligible for Events, Open Play & Court
              Reservations
            </h2>
            <p className="mb-4">
              Membership is not required for open play and events.
            </p>
            <p className="text-4xl font-bold mb-4">
              $5<span className="text-xl">/hour</span>
            </p>
            <div className="mt-auto">
              <Button
                asChild
                className="text-lg bg-gradient-to-r from-violet-600 to-indigo-600"
              >
                <a
                  href="https://app.courtreserve.com/Online/Events/List/9834"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memberships;
