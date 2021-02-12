import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function PurposeBlip() {
  return (
    <div
      style={{ backgroundColor: "#292929" }}
      className="container flex justify-evenly my-20 w-auto text-xl text-white"
    >
      <div className="w-1/4 h-1/4">
        <Image
          src={"/mainImg/profilePic.png"}
          layout="responsive"
          width={400}
          height={500}
        />
      </div>
      <div className="p-5">
        <h2 className="mb-10 p-0 self-center text-center h-16 font-bold text-3xl">
          What I'm about
        </h2>
        <motion.ul
          transition={{ ease: "easeOut", duration: 2 }}
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
