import {useEffect, useState} from "react";

// import all images
import logo from "../../assets/logo/logo-bookmark.svg";
import Burger from "../../assets/icon/icon-hamburger.svg"
import Close from "../../assets/icon/icon-close.svg"

// import all components
import Social from "../ui/social";

const navbar = () => {
  const [showNav, setShowNav] = useState(false)

  // make array of title menu for navigation bar
  const menus = ["FEATURES", "PRICING", "CONTACT"];

  // toggle a state to show or hide the mobileNav menu modal
  const toggleNav = () =>  {
    setShowNav(!showNav)
  }

  // prevent body from scrolling when mobileNav menu modal is Open
  useEffect(() => {
      document.body.classList = (showNav ? "max-md:overflow-hidden" : "overflow-unset")
  }, [showNav]) 

  return (
    <header 
    className="flex justify-between items-center px-8 md:px-20 pt-12">
      <img src={logo} alt="Bookmark Logo" className="object-contain"/>   
        <nav className={(showNav ? " translate-y-0 max-md:bg-verydarkblue" : "max-md:-translate-y-full") + " flex gap-8 items-center tracking-[1.2px] text-[0.8rem] max-md:bg-opacity-90 max-md:fixed max-md:flex-col top-0 right-0 max-md:z-10 max-md:w-full max-md:h-full max-md:justify-center smooth md:text-black text-white"}>
          {menus.map((menu) => (
            <a href={"#" + menu} key={menu} onClick={toggleNav} className="hover:text-red-400 smooth">{menu}</a>
          ))}
          <a href='#' className='md:rounded-md md:px-8 md:py-2 md:text-white md:bg-red-500 md:shadow-lg md:hover:bg-white hover:text-red-500 md:border-[2px] smooth md:border-red-500
          '>LOGIN</a>
          <Social hidden="md:hidden my-4"/>
        </nav>
        <img src={showNav ? Close : Burger} alt="Burger Menu" className="object-contain md:hidden cursor-pointer z-10" onClick={toggleNav}/>  
    </header>
  );
};

export default navbar;
