import React from "react";
import Login from "../ui/LoginBtn";
import logo from "../../assets/logo/logo-bookmark.svg";
import Burger from "../../assets/icon/icon-hamburger.svg"
const navbar = () => {
  const menus = ["FEATURES", "PRICING", "CONTACT"];

  return (
    <header className="flex justify-between items-center px-8 md:px-20 pt-12">
      <img src={logo} alt="Bookmark Logo" className="object-contain"/>   
        <nav className="flex gap-8 items-center tracking-[1.2px] max-md:hidden text-[0.8rem]">
          {menus.map((menu) => (
            <a href={menu} key={menu} className="hover:text-red-400 smooth">{menu}</a>
          ))}
          <Login />
        </nav>
        <img src={Burger} alt="Burger Menu" className="object-contain md:hidden"/>  
    </header>
  );
};

export default navbar;
