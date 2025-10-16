import { delay, motion, stagger } from "framer-motion";
const Links = () => {
  const ites = [
    "Homepage",
    "Contact",
    "Skills & Expertise",
    "About",
    "Portfolio",
  ];
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };
  const childvariants = {
    open: {
      y: 0,
      opacity: 1,
      whileHover: {
        scale: 1.1,
      },
    },
    closed: {
      y: 20,
      opacity: 0,
    },
  };
  return (
    // ye isliye kam kr rhe kyuki parent componenet sidebar ke andr humne bg div define ke andr variant define kra h or bo animate property inherit kr rha parent sidebar se : or ye kr rhe parent bg se kra h or ye child ki trh kam kr rhe islioye animate context bha se use kr rhe h
    <motion.div variants={variants} className="links">
      {ites.map((it, i) => (
        <motion.a
          variants={childvariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`#${it}`}
          key={i}
        >
          {it}
        </motion.a>
      ))}
    </motion.div>
  );
};
export default Links;
