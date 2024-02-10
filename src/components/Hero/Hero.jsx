import "./hero.css";
import spoon from "../../assets/spoon.svg";
import welcome from '../../assets/welcome.png'

const Hero = () => {
  return (
    <section className="hero_section container">
      <div className="hero_text">
        <p>Chase The New Flavour</p>
        <img src={spoon} alt="Spoon" />
        <h1>The Key To Fine Dining</h1>
        <p>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button className="custom_btn">Explore Menu</button>
      </div>

      <div className="hero_image">
        <img src={welcome} alt="welcome"/>
      </div>
    </section>
  );
};

export default Hero;
