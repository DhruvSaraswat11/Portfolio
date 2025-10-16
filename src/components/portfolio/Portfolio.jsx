import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
const items = [
  {
    title: "Personal Portfolio ",
    id: 1,
    img: "https://img.freepik.com/free-vector/flat-design-portfolio-template-design_52683-80880.jpg?semt=ais_hybrid&w=740&q=80",
    description:
      "A modern, fully responsive personal portfolio website built using React, Framer Motion, SCSS, and EmailJS.This project showcases my skills, projects, and achievements in an interactive and visually appealing way",
    href: "#",
  },
  {
    title: "Drum stick",
    id: 2,
    img: "https://drummagazine.com/wp-content/uploads/2022/03/asba-drums-soNEV79W3vY-unsplash-700x494.jpg",
    description:
      "The Drum Player turns your keyboard into a digital drum kit. Keys A–L trigger unique drum sounds like kick, snare, and hi-hat. On-screen blocks highlight and expand when pressed, giving instant audio and visual feedback. Play beats easily, experiment with rhythms, and enjoy an interactive music experience.",
    href: "https://dhruvsaraswat11.github.io/drum-palyer/",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "start end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <>
      <section>
        <div className="container">
          <div className="wrapper">
            <div ref={ref} className="imgcontainer">
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textcontainer" style={{ y: y }}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button>
                <a href={item.href}> see </a>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <>
      <div ref={ref} className="portfolio">
        <div className="progress">
          <h1>Projects work</h1>
          <motion.div
            style={{ scaleX: scaleX }}
            className="progressBar"
          ></motion.div>
        </div>
        {items.map((item) => (
          <Single key={item.id} item={item}></Single>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
