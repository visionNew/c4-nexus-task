import './Footer.css'
import Logo from "../../assets/logo.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <section className='footer__section'>
      <footer className="container">
        <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        <ul className='footer__links'>
          <li><a href="#">T&C</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <ul className='social__icon'>
          <li className='btn'><FacebookIcon sx={{ fontSize: 30 }}  /></li>
          <li className='btn'><InstagramIcon sx={{ fontSize: 30 }} /></li>
          <li className='btn'><LinkedInIcon sx={{ fontSize: 30 }} /></li>
        </ul>
      </footer>
    </section>
  );
};

export default Footer;