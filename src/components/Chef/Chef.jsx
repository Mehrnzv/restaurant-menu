import "./chef.css";
import chef from "../../assets/chef.png";
import spoon from "../../assets/spoon.svg";
import quote from "../../assets/quote.png";
import sign from '../../assets/sign.png'

const Chef = () => {
  return (
    <section className="chef">
      <div className="container">
        <div className="chef_image">
          <img src={chef} alt="chef" />
        </div>

        <div className="chef_info">
          <div className="chef_heading">
            <p>Chef’s Word</p>
            <img src={spoon} alt="spoon" />
            <h1>What We Believe in</h1>
          </div>

          <div className="chef_content">
            <div className="chef_content-quote">
              <img src={quote} alt="quote" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
            </div>
            <p>
              
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </p>
          </div>

          <div className="chef_sign">
            <p className="chef_name">Kevin Luo</p>
            <p className="chef_position">Chef & Founder</p>
            <img src={sign} alt="sign"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
