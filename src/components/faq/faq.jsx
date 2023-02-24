import {useState} from 'react'
import Banner from './banner'
import Button from '../ui/PrimaryBtn'

// import all animation
import { motion } from "framer-motion";
import { container, item, set } from "../../utils/motion.js";

const faq = () => {
    const [faqs, setFaqs] = useState([
        { question: "What is bookmark?",
         answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
         open: false
         },
         {
         question: "How can i request a new browser?",
         answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus ero aliquet convallis ultricies. Mauris augue massa, ultricies no ligula. Suspendisse imperdie tVivamus luctus eros aliquet convalli ultricies. Mauris augue massa, ultricies non ligula. Suspendiss imperdiet.",
         open: false
 
         },
         {
         question: "Is there a mobile app?",
         answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
         open: false
 
         },
         {
         question: "What about other Chromium browsers?",
         answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
         open: false
         },
     ])

     
     const handleToggle = (index) => {
        setFaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }

    
          return faq;
        }))
      }

  return (
    <motion.section variants={container} {...set} className='grid place-items-center px-4 my-[7rem]'>
    <motion.h1 variants={item(0.5)} className='heading text-center'>Frequently Asked Questions</motion.h1>
    <motion.p  variants={item(0.9)} className='paraf text-center'> Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.</motion.p>
  <motion.div variants={item(1.3)} className='max-w-[33.75rem] border-b my-8 '>
    {faqs.map((faq, i) => <Banner key={i} index={i} toggle={handleToggle} faq={faq}/>
    )}
    </motion.div>
    <motion.div variants={item(1.8)}>
   <Button title="More Info" />
    </motion.div>
    </motion.section>
  
  )

}

export default faq

     