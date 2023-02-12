import React from "react";
import heroimg from "../assets/images/illustration-hero.svg"
import Button from "./ui/buttonPrimary";
import Button2 from "./ui/buttonSecondary";
import HeroText from "../layout/heroText";


const hero = () => {
  return (
    <section className="flex justify-center gap-16 md:flex-row-reverse mt-[5rem] items-center 
    
    ">
      <img src={heroimg} alt="Hero Img" />
       <HeroText >
        <h1 className="text-5xl font-medium ">Simple Bookmark Manager</h1>
        <p className="text-grayishblue my-4">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-4">
        <Button title='Get Started' />
        <Button2 title='Get it on Firefox' />
        </div>
       
      </HeroText>
    </section>
  );
};

export default hero;
