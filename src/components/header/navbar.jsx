import {useState} from "react";
import logo from "../../assets/logo/logo-bookmark.svg";
import Burger from "../../assets/icon/icon-hamburger.svg"
import Close from "../../assets/icon/icon-close.svg"
const navbar = () => {
  const menus = ["FEATURES", "PRICING", "CONTACT"];
  const [showNav, setShowNav] = useState(false)
  
  const toggleNav = () =>  {
    setShowNav(!showNav)
  }

  console.log(showNav);

  return (
    <header className="flex justify-between items-center px-8 md:px-20 pt-12">
      <img src={logo} alt="Bookmark Logo" className="object-contain"/>   
        <nav className={(showNav ? "max-md:hidden" : "flex") + "  gap-8 items-center tracking-[1.2px] text-[0.8rem] max-md:fixed max-md:flex-col top-0 right-0 max-md:z-10 bg-opacity-30 scroll max-md:w-full max-md:h-full max-md:justify-center"}>
          {menus.map((menu) => (
            <a href={"#" + menu} key={menu} className="hover:text-red-400 smooth">{menu}</a>
          ))}
          <a href='#' className='md:rounded-md px-8 py-2 md:text-white md:bg-red-500 md:shadow-lg hover:bg-white hover:text-red-500 md:border-[2px] smooth md:border-red-500
          '>LOGIN</a>
        </nav>
        <img src={showNav ? Close : Burger} alt="Burger Menu" className="object-contain md:hidden cursor-pointer z-10" onClick={toggleNav}/>  
    </header>
  );
};

export default navbar;
