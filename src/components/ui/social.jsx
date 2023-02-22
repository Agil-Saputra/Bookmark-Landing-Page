import React from 'react'
import facebook from "../../assets/icon/icon-facebook.svg";
import twitter from "../../assets/icon/icon-twitter.svg";

const social = ({hidden}) => {
  return (
    <div className={hidden + " flex items-center gap-8"}>
    <a href="https://facebook.com" target="_blank">
    <img src={facebook} alt="Facebook Logo" className='fill-neutral-500'/>
    </a>
    <a href="https://twitter.com" target="_blank">
    <img src={twitter} alt="Twitter Logo" />
    </a>
  </div>
  )
}

export default social