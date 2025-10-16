import { useRef } from "react";
import "./parallex.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const Parallex = ({ type }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // console.log(ref);
  const ytg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  console.log(ybg);
  return (
    <div
      className="parallex"
      ref={ref}
      style={{
        background:
          type == "services"
            ? "linear-gradient(180deg , #111132  , #0c0c1d)"
            : "linear-gradient(180deg ,  #111132) , #505064 ,",
      }}
    >
      <motion.h1 style={{ y: ytg }}>
        {type == "services" ? "✨ Skill Set ✨" : "My Projects"}
      </motion.h1>
      <motion.div style={{ x: ybg }} className="stars"></motion.div>
      <motion.div
        style={{
          y: ybg,
          backgroundImage:
            type == "services" ? "url(/planets.png)" : "url(/sun.png)",
        }}
        className="planets"
      ></motion.div>
      <div className="mountains"></div>
    </div>
  );
};
export default Parallex;

