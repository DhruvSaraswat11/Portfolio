import { motion } from "framer-motion";
import React, { useState } from "react";
import "./sidebar.scss";
import Links from "./Links";
const Sidebar = (props) => {
  const op = <img className="k" src="./cross.png" alt="cross" />;
  const cl = <img className="k" src="./open.png" alt="cross" />;
  const [open, openSet] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(900px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      {/*  Parent is passing animate prop but has no variants of its own, so it doesn't animate itself
       */}
      <motion.div variants={variants} className="bg">
        {/*  Child inherits animate state ("open"/"closed") from parent and uses its own variants  */}
        <Links className="links"></Links>
      </motion.div>
      <button onClick={() => openSet((prev) => !prev)}>{open ? op : cl}</button>
    </motion.div>
  );
};
export default Sidebar;
