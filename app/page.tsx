'use client';

import About from "@/components/home/about";
import Welcome from "@/components/home/welcome";
import { useEffect } from "react";
import { useAppContext } from "./context/AppContext";

export default function Home() {
  const { setPageTitle } = useAppContext();
  useEffect(() => {
    setPageTitle('');
  }, []);
  return (
    <>
      <Welcome />
      <About />
    </>
  );
}
