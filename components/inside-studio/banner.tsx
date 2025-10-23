'use client';
import { useAppContext } from "@/app/context/AppContext";
import { useEffect } from "react";
import CustomVideo from '@/components/video/custom-video';
import Container from "@/components/container";

export default function InsideStudioBanner() {
  const { setPageTitle } = useAppContext();
  
  useEffect(() => {
    setPageTitle('INSIDE THE STUDIO');
  }, [setPageTitle]);
    
  return (
    <div className="relative h-screen flex items-center justify-center lg:items-end lg:justify-end">
      <CustomVideo autoPlay muted loop id="insideStudioVideo" src="/web-assets/video/inside-studio.mp4" className="absolute top-0 left-0 z-0 object-cover w-full h-full"></CustomVideo>
      <Container className="pb-24 z-0">
        <div className="w-full">
          <p className="lg:indent-20 text-center lg:text-justify"><strong className="text-light-orange-default">Inside the studio</strong> is where ideas are organized, designed, and brought to life. It’s where support tasks turn into flow, visuals take shape through posters and pubmats, and projects move from plan to reality. Beyond the desk, I’ve also worked behind the scenes in production—directing and coordinating live events, making sure every cue runs seamlessly from script to stage.</p>
        </div>
      </Container>
    </div>
  );
}
