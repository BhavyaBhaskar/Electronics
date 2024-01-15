/* eslint-disable no-unused-vars */
import Menu from "../Component/Menu";
import SearchBox from "../Component/SearchBox";
import Location from "../Component/Location";
import Account from "../Component/Account";
import Cart from "../Component/Cart";
import MenuList from "../Component/MenuList";
import { useState } from "react";
import Logo from "../Component/Logo";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#000000] h-16 flex justify-between px-36 sticky top-0 z-40">
        <Logo image="Icons/BBlogo.png" />
        <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <SearchBox />
        <Location />
        <Account />
        <Cart />
        {isMenuOpen && <MenuList setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </>
  );
}

export default Header;
