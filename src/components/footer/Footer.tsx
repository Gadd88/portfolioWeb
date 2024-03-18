import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="contact-me">
        <span>
          <a className="contact-link" href="https://www.linkedin.com/in/matias-saade/" target="_blank">
            <FaLinkedin />
            Linkedin
          </a>
        </span>
        <span>
          <a className="contact-link" href="https://github.com/Gadd88" target="_blank">
            <FaGithubSquare />
            Github
          </a>
        </span>
      </div>
      <div className="update-info">
        <p>Última actualización: 12/03/2024</p>
      </div>
    </footer>
  );
};
