import Image from "next/image";
import meImg from "@/assets/img/me.png";
import Container from "../container";
import lightingImg from '@/assets/img/lighting.jpg';

export default function About() {
  return (
    <section id="about" className="h-screen flex flex-col"
        style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundImage: `linear-gradient(#707070E0, #707070E0), url(${lightingImg.src})` 
        }}
      >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-5">
          <div className="h-full w-full flex justify-center items-center">
            <Image
              src={meImg}
              alt="Logo"
              width={300}
              height={100}
              className="w-md max-w-[90%] p-4"
              style={{
                filter: `
                drop-shadow(2px 0 0 #F3E8D1)
                drop-shadow(-2px 0 0 #F3E8D1)
                drop-shadow(0 2px 0 #F3E8D1)
                drop-shadow(0 -2px 0 #F3E8D1)
              `,
              }}
            />
          </div>
          <div className="h-full w-full flex justify-center items-center">
            <div className="flex flex-col gap-4 text-light-gray">
              <p className="text-4xl font-highlight">Hi, I’m Juliane.</p>
              <p>I started Align Studio to bring together the things I love: keeping things organized, bringing ideas to life through design and production, and sharing insights through personal reflections.</p>
              <p>I’ve collaborated with entrepreneurs, teams, and business owners to streamline operations, coordinate projects, and bring creative ideas from concept to reality.</p>
              <p>This is more than just ticking boxes or making art. Whether it’s refining the little details, connecting with your audience, or carving out a quiet moment to breathe—it’s about creating space for what truly matters.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
