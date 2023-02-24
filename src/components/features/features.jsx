// import all components
import { useState } from "react";
import TabContent from "./tabContent";
import TabNav from "./tabNav";

// import all images for tabContent
import tab1 from "../../assets/images/illustration-features-tab-1.svg";
import tab2 from "../../assets/images/illustration-features-tab-2.svg";
import tab3 from "../../assets/images/illustration-features-tab-3.svg";

// import all animation
import { motion } from "framer-motion";
import { container, item, set } from "../../utils/motion.js";

const features = () => {
  // set default usestate
  const [activeTab, setActiveTab] = useState("1");



  return (
    <motion.section variants={container} {...set} id="FEATURES" className="mt-20">

      <motion.div
      variants={item(0.3)} 
      className="text-center grid place-items-center">
        <motion.h1 variants={item(0.5)} className="heading">Features</motion.h1>
        <motion.p variants={item(0.7)} className=" paraf">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </motion.p>
      </motion.div>

      {/* tabnav for navigating between panel, change the active states to id using useState hooks*/}
      <motion.nav variants={item(0.9)} className="flex max-md:flex-col justify-center text-center mx-8 mt-8">
        <TabNav
          id="1"
          title="Simple Bookmarking"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <TabNav
          id="2"
          title="Speedy Searching"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <TabNav
          id="3"
          title="Easy Sharing"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </motion.nav>

      {/* tabcontent get the id and activetab states to render a current tabpanel*/}
      <div>
        <TabContent
          id="1"
          activeTab={activeTab}
          title="Bookmark in one click"
          img={tab1}
        />
        <TabContent
          id="2"
          activeTab={activeTab}
          title="Intelligent search"
          img={tab2}
        />
        <TabContent
          id="3"
          activeTab={activeTab}
          title="Share your bookmarks"
          img={tab3}
        />
      </div>
    </motion.section>
  );
};

export default features;
