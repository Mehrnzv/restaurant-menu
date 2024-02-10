import "./newsletter.css";
import spoon from "../../assets/spoon.svg";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter_text">
        <p>Newsletter</p>
        <img src={spoon} alt="spoon" />
        <h1>Subscribe To Our Newsletter</h1>
        <p>And never miss latest Updates!</p>
      </div>

      <div className="newsletter_input">
        <input type="email" placeholder="Email Address" />
        <button className="custom_btn">Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
