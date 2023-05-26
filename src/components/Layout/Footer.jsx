import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA BurgerWala</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All rights received @mbaburgerwala</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.youtube.com">
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://www.github.com">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
