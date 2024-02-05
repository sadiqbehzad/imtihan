import "./contactCard.css";

const ContactCard = ({props}) => {

  return (
    <div className="contact-card">
      <div className="contact-card-container">
        <h2 className="contact-title">CALL / EMAIL US TODAY</h2>
        <p className="contact-number">+1(234)-567-1234</p>
        <p className="contact-email">collegium@collegium.com</p>
      </div>
    </div>
  );
};

export default ContactCard;
