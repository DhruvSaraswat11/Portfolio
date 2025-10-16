import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar.jsx";

const Navbar = (props) => {
  return (
    <>
      <div className="navbar">
        <Sidebar></Sidebar>
        <div className="wrapper">
          <span>Dhruv </span>
          <div className="social">
            <a href="#" className="social">
              <a href="https://github.com/DhruvSaraswat11/">
                <img src="/git.png" alt="" />
              </a>
              <a href="https://www.linkedin.com/in/dhruv-saraswat-a7465a280/">
                <img src="/lin.png" alt="" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dhruvsaraswat22102006@gmail.com">
                <img src="/gil.png" alt="" />
              </a>
              <a href="https://t.me/Thunder8590">
                <img src="/public/tg.png" alt="" />
              </a>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
