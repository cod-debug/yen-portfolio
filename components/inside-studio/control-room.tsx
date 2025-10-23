import Container from "@/components/container";
import ClientCarousel from "@/components/inside-studio/client-carousel";
import ControlRoolImage from "@/assets/img/controll-room.webp";

export default function ControlRoom() {
  return (
    <div
      id="control-room"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundImage: `linear-gradient(#000000DD, #000000DD), url(${ControlRoolImage.src})`,
      }}
    >
      <Container className="min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-screen items-center gap-2 md:gap-5">
          <div className="md:min-h-3/4 border border-gray-orange rounded-2xl relative bg-black/80 order-2 md:order-1">
            <ClientCarousel />
          </div>
          <div className="h-auto md:h-3/4 flex items-end py-2 md:py-5 order-1 md:order-2">
            <div className="md:pb-4 text-center md:text-right">
              <div className="text-4xl font-highlight text-light-orange-default">
                The Control Room
              </div>
              <p>
                Here’s where the background work happens: organizing details,
                keeping timelines steady, and making sure nothing slips through
                the cracks.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
