/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MenuItem from "./MenuItem";
import MenuHeading from "./MenuHeading";

function MenuList({ setIsMenuOpen, setCurrentPage }) {
  return (
    <div
      className="bg-[#191919] text-stone-100 w-80 mx-36 px-10 py-5 absolute z-30 top-16"
      onMouseLeave={() => setIsMenuOpen(() => false)}
    >
      <MenuHeading text="Shop by Category" setIsMenuOpen={setIsMenuOpen} />
      <MenuItem
        text="Televisionn & Accessories"
        setCurrentPage={setCurrentPage}
      />
      <MenuItem text="Home Appliance" setCurrentPage={setCurrentPage} />
      <MenuItem
        text="Phone & Wearables"
        setCurrentPage={setCurrentPage}
        pageOpen="MobilePhone"
      />
      <MenuItem text="Computers and Tablets" setCurrentPage={setCurrentPage} />
      <MenuItem text="Kitchen Appliances" setCurrentPage={setCurrentPage} />
      <MenuItem text="Audio & Video" setCurrentPage={setCurrentPage} />
      <MenuItem text="Health & Fitness" setCurrentPage={setCurrentPage} />
      <MenuItem
        text="Grooming & Personal Care"
        setCurrentPage={setCurrentPage}
      />
      <MenuItem text="Camera & Accessories" setCurrentPage={setCurrentPage} />
      <MenuItem text="Smart Devices" setCurrentPage={setCurrentPage} />
      <MenuItem text="Gaming" setCurrentPage={setCurrentPage} />
      <MenuItem text="Accessories" setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default MenuList;
