import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Menu from "./components/SpecialMenu/Menu";
import Chef from "./components/Chef/Chef";
import Intro from "./components/Intro/Intro";
import Laurels from "./components/Laurels/Laurels";
import Gallery from "./components/Gallery/Gallery";
import FindUs from "./components/FindUs/FindUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="navHero_bg">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
