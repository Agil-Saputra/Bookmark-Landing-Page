import React from 'react'
import chrome from "../../assets/logo/logo-chrome.svg"
import firefox from "../../assets/logo/logo-firefox.svg"
import opera from "../../assets/logo/logo-opera.svg"

import Card from "./card"

// import all animation
import { motion } from "framer-motion";
import { container, item, set } from "../../utils/motion.js";

const download = () => {
  return (
    <motion.section variants={container} {...set} className='grid place-items-center mt-[13rem] px-8'>
    <motion.h1 variants={item(0.3)} className='heading text-center'>Download the extension</motion.h1>
      <motion.p variants={item(0.5)} className='paraf text-center'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</motion.p>
      <motion.div variants={container} {...set} className='flex gap-12 justify-center items-center flex-col md:flex-row mt-12 w-full h-auto'>
        <Card img={chrome} platform='Chrome' version='62' flex="self-start" delay={0.7}/>
        <Card img={firefox} platform='Firefox' version='55' flex="self-center md:mt-[2.6875rem] lg:self-start" delay={0.9}/>
        <Card img={opera} platform='Opera' version='46' flex="self-end md:mt-[4.75rem] lg:self-start" delay={1.1}/>
      </motion.div>
    </motion.section>
  )
}

export default download