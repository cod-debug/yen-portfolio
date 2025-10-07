"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "../icons";
import { usePathname, useRouter } from "next/navigation";

export default function NavbarItems() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  function handleToggleInsideStudio(){
    setOpen(!open);
    const target_route = '/inside-studio';
    if(pathname !== target_route){
      router.push(target_route);
    }
  }
  
  return (
    <div className="mt-10 w-80 mx-3 border rounded p-5 border-light/50 bg-black/70 fixed top-5 right-20 z-100 backdrop-blur-md">
      <ul className="nav-items text-light font-highlight">
        <li className="border-b p-2 border-light">
          <Link href="/#about" className="w-full">
            About Me
          </Link>
        </li>

        {/* Dropdown */}
        <li className="border-b p-2 border-light relative">
          <button
            className="flex justify-between w-full items-center cursor-pointer"
            onClick={handleToggleInsideStudio}
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
              <Link href="/inside-studio#control-room" className="w-full">
                The Control Room
              </Link>
            </li>
            <li className="py-1">
              <Link href="#creative-corner" className="w-full">
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
