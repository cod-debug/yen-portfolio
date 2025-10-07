'use client';
import { useAppContext } from "@/app/context/AppContext";
import { useEffect } from "react";

export default function InsideStudioBanner() {
  const { setPageTitle } = useAppContext();
  
  useEffect(() => {
    setPageTitle('INSIDE THE STUDIO');
  }, [setPageTitle]);
    
  return (
    <div className="h-screen flex items-center justify-center lg:items-end lg:justify-end">
      <div className="w-full lg:w-3/5 xl:1/2 p-10 lg:p-24">
        <p className="lg:indent-20 text-center lg:text-justify"><strong>Inside the studio</strong> is where ideas are organized, designed, and brought to life. It’s where support tasks turn into flow, visuals take shape through posters and pubmats, and projects move from plan to reality. Beyond the desk, I’ve also worked behind the scenes in production—directing and coordinating live events, making sure every cue runs seamlessly from script to stage.</p>
      </div>
    </div>
  );
}
