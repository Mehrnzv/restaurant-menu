import "./about.css";
import spoon from "../../assets/spoon.svg";
import knife from "../../assets/knife.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about_text about_left">
          <p className="about_text-title">About Us</p>
          <img src={spoon} alt="spoon" />
          <p className="about_text-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="custom_btn">Know More</button>
        </div>

        <div className="about_knife">
          <img src={knife} alt="" />
        </div>

        <div className="about_text">
          <p className="about_text-title">Our History</p>
          <img src={spoon} alt="spoon" />
          <p className="about_text-desc">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button className="custom_btn">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
