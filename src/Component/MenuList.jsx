import MenuItem from "./MenuItem";
import MenuHeading from "./MenuHeading";

function MenuList() {
  return (
    <ul className="bg-stone-700 text-stone-100 w-72 ml-80 px-10">
      <MenuHeading text="Shop by Category" />
      <MenuItem text="Televisionn & Accessories" />
      <MenuItem text="Home Appliance" />
      <MenuItem text="Phone & Wearables" />
      <MenuItem text="Computers and Tablets" />
      <MenuItem text="Kitchen Appliances" />
      <MenuItem text="Audio & Video" />
      <MenuItem text="Health & Fitness" />
      <MenuItem text="Grooming & Personal Care" />
      <MenuItem text="Camera & Accessories" />
      <MenuItem text="Smart Devices" />
      <MenuItem text="Gaming" />
      <MenuItem text="Accessories" />
    </ul>
  );
}

export default MenuList;
