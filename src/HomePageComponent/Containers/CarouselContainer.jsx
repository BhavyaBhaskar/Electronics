import { Carousel } from "flowbite-react";

function CorouselContainer() {
  return (
    <div className="h-[480px]">
      <Carousel>
        <img src="HomePageComponents/Carousel/DeskAsus.jpg" alt="..." />
        <img src="HomePageComponents/Carousel/DeskSamsung.jpg" alt="..." />
        <img src="HomePageComponents/Carousel/DeskSonos.jpg" alt="..." />
      </Carousel>
    </div>
  );
}

export default CorouselContainer;
