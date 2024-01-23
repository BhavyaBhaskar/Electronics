/* eslint-disable no-unused-vars */
import LatestLaptopForYouItem from "../Items/LatestLaptopForYouItem";

function LatestLaptopForYouContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-56 my-16 mb-4 text-2xl font-bold">
        Latest Laptop For You
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-2 pb-4">
          <LatestLaptopForYouItem image="LaptopComponents/LatestLaptopForYou/HPEnvy.jpg" />
          <LatestLaptopForYouItem image="LaptopComponents/LatestLaptopForYou/Macbook.jpg" />
        </div>
        <div className="grid grid-cols-4 pt-4">
          <LatestLaptopForYouItem image="LaptopComponents/LatestLaptopForYou/13Corei5.jpg" />
          <LatestLaptopForYouItem image="LaptopComponents/LatestLaptopForYou/12corei3.jpg" />
          <LatestLaptopForYouItem image="LaptopComponents/LatestLaptopForYou/13corei7.jpg" />
          <LatestLaptopForYouItem image="LaptopComponents/LatestLaptopForYou/amdryzen7.jpg" />
        </div>
      </div>
    </div>
  );
}

export default LatestLaptopForYouContainer;
