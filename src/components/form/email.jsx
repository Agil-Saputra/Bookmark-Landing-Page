import {useRef} from 'react'

const email = () => {
    function handleSubmit(event) {
        event.preventDefault();
    }
  return (
    <form className='flex gap-4 sm:items-start sm:flex-row flex-col' onSubmit={handleSubmit}>  
    <div className='bg-red-500 rounded-md border-[2px] border-red-500'>
    <input type='email' className='text-black pl-6 py-2 rounded-md border-[2px] border-white outline-none' id='email'/>
    <p className='text-left px-2 text-[12px] italic py-1 hidden'>Whoops, make sure it's an email</p>
    </div>
    <button type='submit' className='rounded-md px-4 py-2 text-white bg-red-500 shadow-lg hover:bg-white hover:text-red-400 border-[2px] smooth border-red-500'>Contact Us</button>
    </form>
  )
}

export default email