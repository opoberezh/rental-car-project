import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { FooterContainer, FooterList, SocialNet, Span } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterList>
        <li>
          <SocialNet
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer noopener nofollower"
          >
            <FaFacebook size={24} />
          </SocialNet>
        </li>
        <li>
          <SocialNet
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer noopener nofollower"
          >
            <FaInstagram size={24} />
          </SocialNet>
        </li>
        <li>
          <SocialNet
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer noopener nofollower"
          >
            <FaLinkedin size={24} />
          </SocialNet>
        </li>
      </FooterList>
      <address>
        <FooterList>
          <li>
            <SocialNet href="mailto:info@rent_car.com">
              <MdEmail size={24} style={{ marginRight: '10px' }} /><Span>info@rent-car.com</Span>

            </SocialNet>
          </li>
          <li>
            <SocialNet href="tel:+380730000000" className="header-tel link">
              <AiOutlinePhone size={24} style={{ marginRight: '5px' }} /><Span>+380 (73) 000-00-00</Span>
            </SocialNet>
          </li>
        </FooterList>
      </address>
    </FooterContainer>
  );
}

export default Footer;
