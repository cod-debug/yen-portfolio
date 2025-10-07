"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";
import NextLink from "next/link";

import { EllipsisIcon, Logo } from "@/components/icons";
import { Button } from "@heroui/button";
import { useEffect, useState } from "react";
import NavbarItems from "./navbar/navbar-items";
import { useAppContext } from "@/app/context/AppContext";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pageTitle } = useAppContext();
  const pathname = usePathname();
  
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  
  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <>
      <HeroUINavbar
        maxWidth="full"
        position="sticky"
        className="px-2 md:px-12 py-2 fixed bg-[#1F241D2C]"
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start flex-col items-center gap-1"
              href="/#alignstudio"
            >
              <Logo />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent>
          <div className="font-highlight text-light-orange-2 text-lg md:text-2xl text-center w-full">
            {pageTitle}
          </div>
        </NavbarContent>
        <NavbarContent className="basis-1 pl-4" justify="end">
          <Button className="bg-transparent">
            <EllipsisIcon className="size-10" onClick={toggleMenu} />
          </Button>
        </NavbarContent>
      </HeroUINavbar>
      {showMenu && <NavbarItems /> }
    </>
    
  );
};
