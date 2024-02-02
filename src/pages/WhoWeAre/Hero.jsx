import "./hero.css";

import Button from "../../components/button/Button";

const WhoWeAre = () => {
  return (
    <div>
      <div className="heroSection">
        <div className="hs-main-container">
          <p className="route">Home/Who We Are</p>
          <h1 className="title">Who We Are</h1>
          <h2 className="subtitle">
            A digital platform uniting a fractured industry
          </h2>
          <p className="description">
            Collegium brings Owners, Architects, Engineers, Building Trades,
            Constructors, Financiers, and Insurance Underwriters together onto
            one platform and provides them with an end-to-end process and
            next-gen digital tools to deliver Real Estate Development projects
            with exceptional outcomes.
          </p>
          <div className="herobutton">
            <Button label="Headache" />
          </div>
        </div>
      </div>
      <div className="contact-card">
        <div className="contact-card-container">
          <p className="contact-title">CALL / EMAIL US TODAY</p>
          <p className="contact-number">+1(234)-567-1234</p>
          <p className="contact-email">collegium@collegium.com</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
