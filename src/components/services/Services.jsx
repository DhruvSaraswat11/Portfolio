import "./services.scss";
import { animate, motion, scale } from "framer-motion";
const services = () => {
  const variant = {
    animate: {
      rotate: 360,
      transition: { repeat: Infinity, ease: "linear", duration: 1.5 },
    },
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -315 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="skills"
      >
        <h1>Skills & Expertise</h1>
        <p>Turning ideas into clean, functional, and creative code ⚡</p>
        <hr />
        <div className="gridcontainer">
          <div className="coreskills c">
            <h2>💻 Core Technical Skills</h2>
            <motion.div className="shown">
              <motion.span
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px #00f5ff",
                  boxShadow: "0px 0px 25px #00f5ff",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.img
                  variants={variant}
                  className="imgcl"
                  whileHover="animate"
                  src="./react.png"
                  alt=""
                />
                React
              </motion.span>
              <motion.span
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px #00f5ff",
                  boxShadow: "0px 0px 25px #00f5ff",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.img
                  variants={variant}
                  className="imgcl"
                  whileHover="animate"
                  src="./Node.png"
                  alt=""
                />
                Node js
              </motion.span>
              <motion.span
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px #00f5ff",
                  boxShadow: "0px 0px 25px #00f5ff",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.img
                  variants={variant}
                  className="imgcl"
                  whileHover="animate"
                  src="./ds.png"
                  alt=""
                />
                Dsa
              </motion.span>
              <motion.span
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px #00f5ff",
                  boxShadow: "0px 0px 25px #00f5ff",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.img
                  variants={variant}
                  className="imgcl"
                  whileHover="animate"
                  src="./java.png"
                  alt=""
                />
                Java core
              </motion.span>
              <motion.span
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px #00f5ff",
                  boxShadow: "0px 0px 25px #00f5ff",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.img
                  variants={variant}
                  className="imgcl"
                  whileHover="animate"
                  src="./fr.png"
                />
                Framer motion
              </motion.span>
            </motion.div>
          </div>
          <div className="softskills c">
            <h2>⚙️ Tools & Technologies</h2>
            <div className="sk">
              <motion.span
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px #00f5ff",
                  boxShadow: "0px 0px 25px #00f5ff",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.img
                  variants={variant}
                  className="imgcl"
                  whileHover="animate"
                  src="./git.png"
                />
                Git & Github
              </motion.span>
              <motion.span
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px #00f5ff",
                  boxShadow: "0px 0px 25px #00f5ff",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.img
                  variants={variant}
                  className="imgcl"
                  whileHover="animate"
                  src="./post.png"
                />
                Postman
              </motion.span>
              <motion.span
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px #00f5ff",
                  boxShadow: "0px 0px 25px #00f5ff",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.img
                  variants={variant}
                  className="imgcl"
                  whileHover="animate"
                  src="./fig.png"
                />
                Figma
              </motion.span>
            </div>
          </div>
          <div className="tools  c">
            <h2>💬 soft skills</h2>
            <div className="sk">
              <motion.span
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px #00f5ff",
                  boxShadow: "0px 0px 25px #00f5ff",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.img
                  variants={variant}
                  className="imgcl"
                  whileHover="animate"
                  src="./connu.png"
                />
                Fluent Communication
              </motion.span>
              <motion.span
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px #00f5ff",
                  boxShadow: "0px 0px 25px #00f5ff",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.img
                  variants={variant}
                  className="imgcl"
                  whileHover="animate"
                  src="./le.png"
                />
                Leadership
              </motion.span>
              <motion.span
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 10px #00f5ff",
                  boxShadow: "0px 0px 25px #00f5ff",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
              >
                <motion.img
                  variants={variant}
                  className="imgcl"
                  whileHover="animate"
                  src="./prob.png"
                />
                Problem solving
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default services;
