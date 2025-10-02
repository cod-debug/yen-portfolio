"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "../icons";

export default function NavbarItems() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 w-80 mx-3 border rounded p-5 border-light/50 bg-black/20 fixed top-5 right-20 z-100">
      <ul className="nav-items text-light">
        <li className="border-b p-2 border-light">
          <Link href="#about" className="w-full">
            About Me
          </Link>
        </li>

        {/* Dropdown */}
        <li className="border-b p-2 border-light relative">
          <button
            className="flex justify-between w-full items-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span>Inside the Studio</span>
            <ChevronDown
              className={`transition-transform duration-300 size-5 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          <ul
            className={`
              overflow-hidden list-disc pl-8 transition-all duration-500 ease-in-out
              ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <li className="py-1">
              <Link href="#about" className="w-full">
                The Control Room
              </Link>
            </li>
            <li className="py-1">
              <Link href="#about" className="w-full">
                The Creative Corner
              </Link>
            </li>
            <li className="py-1">
              <Link href="#about" className="w-full">
                The Idea Loft
              </Link>
            </li>
            <li className="py-1">
              <Link href="#about" className="w-full">
                The Production Hub
              </Link>
            </li>
          </ul>
        </li>

        <li className="border-b p-2 border-light">
          <Link href="#about" className="w-full">
            Client Spotlight
          </Link>
        </li>
        <li className="p-2 border-light">
          <Link href="#about" className="w-full">
            Say Hello
          </Link>
        </li>
      </ul>
    </div>
  );
}
