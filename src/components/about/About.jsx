import { motion } from "framer-motion";
import "./about.scss";

const experiences = [
  {
    title: "B.Tech in Computer Science and Engineering",
    company: "",
    period: "2023 – 2027  SGPA: 8.45",
    description:
      "Pursuing my undergraduate degree from Dr. A.P.J. Abdul Kalam Technical University (AKTU). Focused on web development, data structures, and core computer science fundamentals.",
    side: "left",
  },
  {
    title: "12th (Senior Secondary):",
    company: "",
    period: " 2022-2023 | Percentage: 92% ",
    description:
      "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics. Gained strong problem-solving and analytical skills.",
    side: "right",
  },
  {
    title: "Secondary Education (Class X)",
    company: "",
    period: " 2020-2021 | Percentage: 91% ",
    description:
      "Completed schooling with a solid foundation in science and mathematics, developing curiosity and interest in technology from an early age.",
    side: "left",
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="timeline-container">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="timeline-title"
        whileHover={{ scale: 1.1 }}
      >
        EDUCATION
      </motion.h2>

      <div className="timeline">
        <div className="line"></div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${exp.side}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="content-box">
              <h3>{exp.title}</h3>
              <p className="description">{exp.description}</p>
              <p className="period">{exp.period}</p>
              {exp.company && <p className="company">{exp.company}</p>}
              <span className="dot"></span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
