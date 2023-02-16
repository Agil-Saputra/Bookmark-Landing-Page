import { useForm } from "react-hook-form";

import logo from "../../assets/logo/logo-bookmark-light.svg";
import facebook from "../../assets/icon/icon-facebook.svg";
import twitter from "../../assets/icon/icon-twitter.svg";

const bottomNav = () => {
  const menus = ["FEATURES", "PRICING", "CONTACT"];
  const {register} = useForm()
  return (
    <div className="flex bg-verydarkblue justify-between  max-md:hidden text-[1rem] px-8 pt-[2.0625rem] pb-[1.875rem] ">
      <nav className="flex gap-10 items-center tracking-[1.2px] text-white">
        <img src={logo} alt="Bookmark Logo" />
        {menus.map((menu) => (
          <a href={menu} key={menu} className="hover:text-red-400 smooth">
            {menu}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-8">
        <img src={facebook} alt="Facebook Logo" />
        <img src={twitter} alt="Twitter Logo" />
      </div>
    </div>
  );
};

export default bottomNav;
