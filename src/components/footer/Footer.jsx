import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Saugat Chhetri</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Certifications
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/thesaugaat/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://www.instagram.com/masaugaatho/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://github.com/masaugaatho"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <a
          href="https://www.youtube.com/@CrypticalCoder"
          className="footer__attribution"
        >
          Inspired by Cryptical Coder
        </a>
      </div>
    </footer>
  );
};

export default Footer;
