import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallex from "./components/parallex/Parallex.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
const App = () => {
  return (
    <>
      <div>
        <section id="Homepage">
          <Navbar></Navbar>
          <Hero></Hero>
        </section>
        <section id="Skills & Expertise">
          <Parallex type="services" />
        </section>
        <section>
          <Services></Services>
        </section>
        <section id="Portfolio">
          {/* <Parallex type="portfolio"></Parallex> */}
          <About></About>
        </section>
        <Portfolio id=""></Portfolio>
        <section id="Contact">
          <Contact></Contact>
        </section>
      </div>
    </>
  );
};

export default App;
