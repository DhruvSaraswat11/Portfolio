import { motion } from "framer-motion";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  let [error, seterror] = useState(false);
  let [success, setsuccess] = useState(false);
  let variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,

        staggerChildren: 0.1,
      },
    },
  };
  let formref = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_boel9mj", "template_m5ztcji", formref.current, {
        publicKey: "nTxh0ELXhXANDPCXi",
      })
      .then(
        () => {
          setsuccess(true);
        },
        (error) => {
          seterror(true);
        }
      );
  };
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textcontainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Gmail</h2>
          <span>dhruvsaraswat22102006@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Uttarpradesh , Mathura 281301</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2></h2>
          <span></span>
        </motion.div>
      </motion.div>
      <motion.div className="formcontainer">
        <motion.form ref={formref} onSubmit={sendEmail} action="">
          <input type="text" required placeholder="Name" name="Name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea
            rows={9}
            placeholder="Message"
            required
            name="message"
          ></textarea>
          <button>Submit</button>
          {error && "error"}
          {success && "success"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
