import { Carousel } from "flowbite-react";

function CorouselContainer() {
  return (
    <div className="h-[480px]">
      <Carousel>
        <img src="Carousel/DeskAsus.jpg" alt="..." />
        <img src="Carousel/DeskSamsung.jpg" alt="..." />
        <img src="Carousel/DeskSonos.jpg" alt="..." />
      </Carousel>
    </div>
  );
}

export default CorouselContainer;
