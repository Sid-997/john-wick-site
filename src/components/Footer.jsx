import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="jw-footer">
      <div className="jw-footer-content">
        <h2 className="jw-footer-title">John Wick Universe</h2>
        <p className="jw-footer-quote">
          “People keep asking if I’m back... Yeah, I’m thinking I’m back.”
        </p>

        <div className="jw-social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>

        <p className="jw-footer-bottom">
          &copy; {new Date().getFullYear()} John Wick Fanpage. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
