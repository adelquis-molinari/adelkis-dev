import HeaderLink from "./HeaderLink.jsx";
import { links } from "../helpers/data-hero";
import React, { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <nav className="fixed top-0 md:relative w-full z-10 bg-zinc-900 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <a className="flex-shrink-0" href="/">
              <img className="h-8" src="/adelkis-logo.png" alt="adelkis.dev" />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link) => (
                  <HeaderLink
                    key={link.id}
                    classType={link.classType}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="block">
            <div className="ml-4 flex items-center md:ml-6"></div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {show ? (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            {links.map((link) => (
              <HeaderLink
                key={link.id}
                classType={link.classTypeMenuDropdown}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
