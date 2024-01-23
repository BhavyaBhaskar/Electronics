/* eslint-disable no-unused-vars */
import HotDealInAppleItem from "../Items/HotDealInAppleItem";

function HotDealInAppleContainer() {
  return (
    <div className="-z-50 ">
      <div className="text-stone-100 mx-56 my-16 mb-4 text-2xl font-bold">
        Hot Deal in Apple
      </div>
      <div className="mx-52">
        <div className="grid grid-cols-2">
          <HotDealInAppleItem image="LaptopComponents/HotDealInApple/M1Mac.jpg" />
          <HotDealInAppleItem image="LaptopComponents/HotDealInApple/M2Mac.jpg" />
        </div>
      </div>
    </div>
  );
}

export default HotDealInAppleContainer;
