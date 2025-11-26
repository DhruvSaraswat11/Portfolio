import "./hero.scss";
import { motion, scale } from "framer-motion";
const Hero = () => {
  const variants = {
    initial: {
      opacity: 0,
      x: -10,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.7,
      },
    },

    scrollbutton: {
      opacity: 0,
      y: 9,
      transition: {
        delay: 1,
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const slider = {
    initial: {
      opacity: 1,
      x: 0,
    },
    animate: {
      x: 200,
      opacity: 1,
      transition: {
        duration: 9,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textcontainer"
          animate="animate"
          initial="initial"
          variants={variants}
        >
          <motion.h2
            variants={variants}
            whileHover={{ color: "rgb(111, 200 , 100)", scaleY: 1.5 }}
          >
            DHRUV SARASWAT
          </motion.h2>
          <motion.h1 variants={variants}>
            Web developer and UI designer
          </motion.h1>
          <div className="buttons">
            <motion.button variants={variants}>
              <a href="https://www.overleaf.com/read/vfvhqqgfnjjz#10eef6" target="blank">
                Resume
              </a>
            </motion.button>
            <motion.button variants={variants}>
              <a href="#Contact">Contact me</a>
            </motion.button>
          </div>
          <motion.img
            variants={variants}
            animate="scrollbutton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slietext"
        variants={slider}
        initial="initial"
        animate="animate"
      >
        developer
      </motion.div>
      <motion.div
        className="imgocontainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.img
          variants={variants}
          style={{ scaleX: -1 }}
          src="/hero.png"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;



