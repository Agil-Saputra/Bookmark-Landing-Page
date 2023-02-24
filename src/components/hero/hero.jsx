import React from "react";
import heroimg from "../../assets/images/illustration-hero.svg";
import Button from "../ui/PrimaryBtn";
import Button2 from "../ui/SecondaryBtn";
import HeroText from "../../layout/heroText";

// import all animation
import { motion } from "framer-motion";
import { container, set, item, image } from "../../utils/motion.js";

const hero = () => {
  return (
    <section className="flex flex-col justify-center lg:gap-16 md:justify-between lg:justify-center md:flex-row-reverse mt-[5rem] items-center overflow-hidden">
      <motion.div 
      variants={image(100)}
      {...set}
      className="w-full bg-1  max-w-[657px] max-h-[446px]"
      >
        <img src={heroimg} alt="Hero Img" className="mx-auto w-full" />
      </motion.div>

      <HeroText>
        <motion.div 
        variants={container}
        {...set}
       >
          <motion.h1 variants={item(0.5)} className="text-5xl font-medium">Simple Bookmark Manager</motion.h1>
          <motion.p variants={item(0.7)} className="paraf">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </motion.p>
          <motion.div variants={item(0.9)} className="flex gap-4 max-md:justify-center">
            <Button title="Get Started" />
            <Button2 title="Get it on Firefox" />
          </motion.div>
        </motion.div>
      </HeroText>
    </section>
  );
};

export default hero;
