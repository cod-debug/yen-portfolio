import Container from "@/components/container";

export default function ControlRoom() {
  return (
    <Container>
      <div className="min-h-screen flex gap-8" id="control-room">
        <div className="flex-1/2 flex items-end py-10">
          <div>
            <div className="text-4xl font-highlight">The Control Room</div>
            <p>
              Here’s where the background work happens: organizing details,
              keeping timelines steady, and making sure nothing slips through
              the cracks.
            </p>
          </div>
        </div>
        <div className="flex-1/2 flex items-end py-10">
          <div className="w-5/6 border rounded-2xl h-1/2">
            <p className="p-10">slider here...</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
