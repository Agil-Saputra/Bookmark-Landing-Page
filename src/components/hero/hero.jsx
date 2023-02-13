import React from "react";
import heroimg from "../../assets/images/illustration-hero.svg"
import Button from "../ui/PrimaryBtn";
import Button2 from "../ui/SecondaryBtn";
import HeroText from "../../layout/heroText";


const hero = () => {
  return (
    <section className="flex flex-col justify-center lg:gap-16 md:justify-between md:flex-row-reverse mt-[5rem] items-center overflow-hidden
    ">
    <div className='w-full bg-1  max-w-[657px] max-h-[446px]'>
    <img src={heroimg} alt="Hero Img"
          className="mx-auto w-full"/>
    </div>
   
       <HeroText >
        <h1 className="text-5xl font-medium">Simple Bookmark Manager</h1>
        <p className="paraf">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-4 max-md:justify-center">
        <Button title='Get Started' />
        <Button2 title='Get it on Firefox' />
        </div>
       
      </HeroText>
    </section>
  );
};

export default hero;
