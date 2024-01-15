/* eslint-disable no-unused-vars */
import AccessoriesItem from "../Items/AccessoriesItem";

function ProductContainer() {
  return (
    <div className="-z-50">
      <div className="text-stone-100 mx-36 my-6 mb-10 text-3xl font-bold">
        Accessories
      </div>
      <div className="mx-36">
        <div className="grid grid-cols-4">
          <AccessoriesItem image="HomePageComponents/Accessories/OfficePrinters.png" />
          <AccessoriesItem image="HomePageComponents/Accessories/Monitors.png" />
          <AccessoriesItem image="HomePageComponents/Accessories/GamingMouse&Keyboard.png" />
          <AccessoriesItem image="HomePageComponents/Accessories/LaptopBags.png" />
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
