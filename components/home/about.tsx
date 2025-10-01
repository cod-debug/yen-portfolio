import Image from "next/image";
import meImg from "@/assets/img/me.jpg";
import Container from "../container";

const grid_child_classnames =
  "h-full w-full flex justify-center items-center";
export default function About() {
  return (
    <section id="about" className="h-screen flex flex-col">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-5">
          <div className={grid_child_classnames}>
            <Image
              src={meImg}
              alt="Logo"
              width={300}
              height={100}
              className="rounded-full w-md border-1 border-white max-w-[90%] p-4"
            />
          </div>
          <div className={grid_child_classnames}>
            <div>
              <p className="text-xl text-center">
                I&apos;m thrilled to present my budding portfolio, a showcase of
                my journey into the vibrant world of graphic design. I&apos;m{" "}
                <span className="text-2xl bold text-grey-100 font-highlight">
                  Juliane Faith Cuizon
                </span>
                , a passionate newcomer fueled by creativity and a relentless
                drive to learn and explore.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
