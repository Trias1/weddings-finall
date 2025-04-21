import React from "react";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer>
      <div className="container center-text">
        <div className="footer__copyright">
        <a href="/#" className="">
          <h4>&copy; Trias & Zulfa </h4>
          </a>
        </div>
        {/* <a href="/#" className="footer__logo">
          Powered by Trias Zaen Mutaqin
        </a> */}
        {/* <div className="footer__socials">
          <a href="https://www.instagram.com/tzm_12/">
            <FiInstagram />
          </a>
        </div> */}
      </div>
    </footer>
  );
}
