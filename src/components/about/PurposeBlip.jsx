import {motion} from "framer-motion";

const variants = {
  hidden: {opacity: 0, x: 100},
  visible: {opacity: 1, x: 0},
};
const BG_style = {backgroundColor: "#292929"};

export default function PurposeBlip() {
  return (
    <div className="container flex flex-col justify-center self-center h-full text-xl  w-1/4">
      <h2 className="self-center text-center h-16 font-bold text-3xl">
        who i am
      </h2>
      <div className="p-5">
        <motion.ul
          transition={{ease: "easeOut", duration: 2}}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <li>᪥ Realistic Clean Living Tips</li>
          <li>᪥ Clean Beauty</li>
          <li>᪥ probably drinking coffee</li>
          <li>᪥ Mama to a cancer survivor</li>
          <li>᪥ Illustrator @joyfulflourish</li>
          <li>᪥ Homeschooling</li>
        </motion.ul>
      </div>
    </div>
  );
}
