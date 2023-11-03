
import "./app.scss";
import Contact from "./components/contact/Contact.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Services from "./components/services/Services.jsx";

const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">

      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">
      <Parallax type="services" />
    </section>
    <section>
        <Services />
      </section>
    <section id="Portfolio">
      <Parallax type="portfolio" />
    </section>
    <Portfolio />
    <section id="Contact">
        <Contact />
      </section>
  </div>;
};

export default App;
