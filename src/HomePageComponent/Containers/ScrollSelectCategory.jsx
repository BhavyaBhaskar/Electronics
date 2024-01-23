/* eslint-disable react/prop-types */
import ScrollSelectCategoryImage from "../Items/ScrollSelectCategoryImage";

function ScrollSelectCategory({ setCurrentPage }) {
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
          image="HomePageComponents/Scroll Select Category/Mobiles.png"
          text="MobilePhone"
          setCurrentPage={setCurrentPage}
        />
        <ScrollSelectCategoryImage
          image="HomePageComponents/Scroll Select Category/Televisions.png"
          text="Television"
          setCurrentPage={setCurrentPage}
        />
        <ScrollSelectCategoryImage
          image="HomePageComponents/Scroll Select Category/Laptops.png"
          text="Laptop"
          setCurrentPage={setCurrentPage}
        />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/Accessories.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/AirConditioner.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/Cameras.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/Gaming.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/Grooming.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/Headphone&Earphones.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/HomeTheatres&Soundbars.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/KitchenAppliance.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/Refrigerators.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/Speakers&MediaPlayers.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/Tablets.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/WaterPurifier.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/Wearables.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/UnboxedByCroma.png" />
        <ScrollSelectCategoryImage image="HomePageComponents/Scroll Select Category/WashingMachine.png" />
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
