import React from "react";
import HeroText from "../../layout/heroText";
import Button from "../ui/PrimaryBtn";

const tab = ({ id, activeTab, title, img }) => {
  return activeTab === id ? (
    <div className="flex md:justify-center justify-between items-center md:my-12 max-md:flex-col gap-14">
      <div className="bg-2 w-full max-w-[538px] max-h-[347px] max-md:my-12 max-md:px-8 ">
      <img src={img} alt="tab1" className="object-contain pl-8" />
    </div>

      <article className="md:w-[48ch] px-8 max-md:text-center max-md:pl-0 max-md:p-2">
        <h1 className="heading">{title}</h1>
        <p className="paraf">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.{" "}
        </p>
        <Button title="More Info" />
      </article>
    </div>
  ) : null;
};

export default tab;
