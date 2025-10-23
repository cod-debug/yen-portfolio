"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import clients from "./data/clients";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function ClientCarousel() {
  return (
    <Carousel className="static" responsive={responsive}>
      {clients.map((client) => {
        return (
          <div className="w-5/6 p-4 m-auto" key={client.companyName}>
            <div className="w-full">
              {client.logo && (
                <Image
                  src={client.logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className={`max-w-[90%] p-2 mx-auto ${client.withBg ? 'bg-white rounded-md' : ''}`}
                />
              )}
              {!client.logo && (
                <h3 className="text-light-orange-default text-3xl text-center font-highlight py-8">
                    {client.companyName}
                </h3>
              )}
              <div className="mt-4">
                <div className="font-highlight">
                  <h3 className="text-light-orange-default font-h3">
                    {client.companyName}
                  </h3>
                  <h4 className="font-h4">{client.designation}</h4>
                </div>
                <ul className="list-disc pl-8 mt-4">
                  {client.workloads.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
