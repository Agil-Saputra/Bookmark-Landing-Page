import React from 'react'
import chrome from "../../assets/logo/logo-chrome.svg"
import firefox from "../../assets/logo/logo-firefox.svg"
import opera from "../../assets/logo/logo-opera.svg"

import Card from "./card"

const download = () => {
  return (
    <section className='grid place-items-center mt-[10rem] p-4'>
    <h1 className='heading text-center'>Download the extension</h1>
      <p className='paraf text-center'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      <div className='flex gap-12 justify-center items-center flex-col md:flex-row mt-12 w-full h-auto'>
        <Card img={chrome} platform='Chrome' version='62' flex="self-start"/>
        <Card img={firefox} platform='Firefox' version='55' flex="self-center md:mt-[2.6875rem] lg:self-start"/>
        <Card img={opera} platform='Opera' version='46' flex="self-end md:mt-[4.75rem] lg:self-start"/>
      </div>
    </section>
  )
}

export default download