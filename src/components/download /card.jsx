import Button from "../ui/PrimaryBtn"
import { delay, motion } from "framer-motion"
import {item, set} from "../../utils/motion.js"

const card = ({img, platform, version, flex, delay}) => {
  return (
    <motion.div variants={item(delay)} {...set} className={"p-12 border shadow-xl grid place-items-center rounded-2xl dots decoration-stone-400 text-center mb-4 " + flex}>
        <img src={img} alt="platform" />
        <div className="my-8 ">
        <p className="font-medium text-xl">Add to {platform}</p>
        <p className="text-grayfishblue">Minimum version {version}</p>
        </div>
        <Button title='Add & Install Extension'/>      
    </motion.div>
  )
}

export default card