import {useState} from 'react'
import Banner from './banner'

const faq = () => {
    const [show, setShow] = useState(false)

    function handleToggle() {
        setShow(!show)
    }

    const faqs = [
       { question: "What is bookmark?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita facere eaque laborum minima alias non dolorum mollitia perspiciatis?",
        },
        {
        question: "How can i request a new browser?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita facere eaque laborum minima alias non dolorum mollitia perspiciatis?",

        },
        {
        question: "Is there a mobile app?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita facere eaque laborum minima alias non dolorum mollitia perspiciatis?",

        },
        {
        question: "What about other Chromium browsers?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita facere eaque laborum minima alias non dolorum mollitia perspiciatis?",
        },
    ]
  return (
    <div>
    {faqs.map(faq => <Banner show={show} toggle={handleToggle} answer={faq.answer} question={faq.question}/>
    )}
    </div>
  )
}

export default faq

     