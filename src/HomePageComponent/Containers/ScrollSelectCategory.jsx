import ScrollSelectCategoryImage from "../Items/ScrollSelectCategoryImage";

function ScrollSelectCategory() {
  return (
    <div className="flex items-center mx-20">
      <span className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </span>
      <div className="py-10 flex gap-10 overflow-y-auto max-w-screen-xl mx-auto">
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/Accessories.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/AirConditioner.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/Cameras.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/Gaming.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/Grooming.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/Headphone&Earphones.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/HomeTheatres&Soundbars.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/KitchenAppliance.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/Laptops.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/Mobiles.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/Refrigerators.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/Speakers&MediaPlayers.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/Tablets.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/Televisions.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/WaterPurifier.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/Wearables.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/UnboxedByCroma.png"}
        />
        <ScrollSelectCategoryImage
          image={"/Scroll Select Category/WashingMachine.png"}
        />
      </div>
      <span className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    </div>
  );
}

export default ScrollSelectCategory;
