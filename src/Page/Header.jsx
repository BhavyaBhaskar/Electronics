/* eslint-disable no-unused-vars */
import Menu from "../Component/Menu";
import SearchBox from "../Component/SearchBox";
import Location from "../Component/Location";
import Account from "../Component/Account";
import Cart from "../Component/Cart";
import MenuList from "../Component/MenuList";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#000000] h-16 flex justify-between px-52 sticky top-0 z-40">
        <div className="text-stone-100 text-2xl flex items-center justify-start font-bold cursor-pointer">
          BBElectronics
        </div>
        {/* <div className="flex justify-start"> */}
        <Menu setIsMenuOpen={setIsMenuOpen} />
        {/* </div> */}
        <SearchBox />
        <Location />
        <Account />
        <Cart />
      </div>
      <div>{isMenuOpen && <MenuList />}</div>
    </>
  );
}

export default Header;
