import React from "react";
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
          <a href='#' className='rounded-md px-8 py-2 text-white bg-red-500 shadow-lg hover:bg-white hover:text-red-500 border-[2px] smooth border-red-500'>LOGIN</a>
        </nav>
        <img src={Burger} alt="Burger Menu" className="object-contain md:hidden"/>  
    </header>
  );
};

export default navbar;
