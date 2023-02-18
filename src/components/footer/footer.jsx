import React from 'react'
import Form from "../form/email"
import BottomNav from './bottomNav'

const footer = () => {
  return (
    <footer>
    <div className='grid place-items-center text-center bg-softblue py-6 text-white'>
    <p className='text-[0.75rem] uppercase tracking-[0.46em]'>35,000+ already joined</p>
    <p className='max-w-[22ch] heading my-4'>Stay up-to-date with what we’re doing</p>
    <Form />
    </div>
    <BottomNav />
    </footer>
  )
}

export default footer 