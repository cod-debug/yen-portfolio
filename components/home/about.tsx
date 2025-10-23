import Image from "next/image";
import meImg from "@/assets/img/me.png";
import Container from "../container";
import lightingImg from '@/assets/img/about-me.jpg';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col"
        style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundImage: `linear-gradient(#00000050, #00000050), url(${lightingImg.src})` 
        }}
      >
      <Container className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen gap-5">
          <div className="h-full w-full flex justify-center items-center">
            <Image
              src={meImg}
              alt="Logo"
              width={300}
              height={100}
              className="w-md max-w-[90%] p-4"
            />
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <div className="flex flex-col gap-4 text-light-orange-default">
              <p className="text-4xl font-highlight">Hi, I’m Juliane.</p>
              <p>Align Studio is my corner of the web—a place where I gather the things I love and the work I’ve been blessed to do: keeping things organized, bringing ideas to life through design and production, and sharing insights through personal reflections.</p>
              <p>I’ve collaborated with entrepreneurs, teams, and business owners to streamline operations, coordinate projects, and bring creative ideas from concept to reality.</p>
              <p>This is more than just ticking boxes or making art. It’s about the
                little details that make a big difference, the connections
                that matter, and the quiet moments we carve out to
                breathe—creating space for what truly matters.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
