import { FiArrowRight, FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import BrandMark from "../components/BrandMark.jsx";
import { footerLinks, trustStrip } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-trust">
        {trustStrip.map(({ icon: Icon, title, copy }) => (
          <div key={title}>
            <Icon />
            <span>{title}</span>
            <small>{copy}</small>
          </div>
        ))}
      </div>
      <div className="footer-main">
        <div className="newsletter">
          <BrandMark />
          <p>Get updates on new collections, exclusive offers and gifting launches.</p>
          <form>
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="submit" aria-label="Subscribe">
              <FiArrowRight />
            </button>
          </form>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div className="footer-column" key={title}>
            <h3>{title}</h3>
            {links.map((link) => (
              <a href="#home" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2026 Nazakat Jewellery. All rights reserved.</p>
        <p>Designed with love for timeless beauty.</p>
        <div className="social-links">
          <a href="#instagram" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a href="#facebook" aria-label="Facebook">
            <FiFacebook />
          </a>
          <a href="#pinterest" aria-label="Pinterest">
            <FaPinterestP />
          </a>
          <a href="#youtube" aria-label="YouTube">
            <FiYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
