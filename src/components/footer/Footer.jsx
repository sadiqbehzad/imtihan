import React from 'react';
import './footer.css'; 
import { Link } from 'react-scroll';

import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify-icons/entypo-social/linkedin';
import twitterIcon from '@iconify-icons/entypo-social/twitter';
import instagramIcon from '@iconify-icons/entypo-social/instagram';
import facebookIcon from '@iconify-icons/entypo-social/facebook-with-circle';
import youtubeIcon from '@iconify-icons/entypo-social/youtube';
import copyrightIcon from '@iconify-icons/ph/copyright-thin';

import Line from '../../components/Line';


const FooterLine = () => {
return (
<div className="footerLine">
  <Line whiteLine/>
  <div className="copyrightText">
    <Icon icon={copyrightIcon}  height="1.5em"/> Collegium Technologies Inc.
  </div>
</div>
)}
const Container = () => {
  return (
    <div className="footer-container">
      <div className="footer-section1">
        <h2>Collegium</h2>
        <p>At Collegium, our commitment is to drive efficiency and collaboration 
          in the construction ecosystem. 
        </p>
        <div className="icons">
          <a href="https://ca.linkedin.com/company/collegium-technologies-inc" target="_blank" rel="noopener noreferrer">
            <Icon icon={linkedinIcon} height="1.5em" />
          </a>
          <a href="YOUR_LINK_TO_TWITTER" target="_blank" rel="noopener noreferrer">
            <Icon icon={twitterIcon} height="1.5em" />
          </a>
          <a href="YOUR_LINK_TO_INSTAGRAM" target="_blank" rel="noopener noreferrer">
            <Icon icon={instagramIcon} height="1.5em" />
          </a>
          <a href="YOUR_LINK_TO_YOUTUBE" target="_blank" rel="noopener noreferrer">
            <Icon icon={youtubeIcon} height="1.5em" />
          </a>
          <a href="YOUR_LINK_TO_FACEBOOK" target="_blank" rel="noopener noreferrer">
            <Icon icon={facebookIcon} height="1.5em" />
          </a>
        </div>
      </div>

      
      <div className="footer-section2">
        <h3>About us</h3>
        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
        <li><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
        <li><Link to="testimony" smooth={true} duration={500}>Partners</Link></li>
        <li><Link to="testimony" smooth={true} duration={500}>Partners</Link></li>

      </div>

    
      <div className="footer-section3">
        <h3>Offices</h3>
        <p>123 Main Street</p>
        <p>City, State, Zip</p>
      </div>
    </div>
  );
  
  }
const Footer = () =>{
  return(
    <div className="footer">
      <Container/>
      <FooterLine />
    </div>
  )
}
export default Footer;




