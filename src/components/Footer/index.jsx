import React from "react";

import "./style.scss";
import moon from "../../assets/images/moon.png";
import Github from "../../assets/icons/Github";
import Linkedin from "../../assets/icons/Linkedin";
import Gmail from "../../assets/icons/Gmail";
import Whatsapp from "../../assets/icons/Whatsapp";
import Behance from "../../assets/icons/Behance";

const Footer = () => {
  return (
    <div className="footer" id={"contac"}>
      <div className={"footer__container"}>
        <div className={"footer__container__contac"}>
          <h1>Puedes contactarme en :</h1>
          <ul>
            <li>
              <a>
              <Github />
                Github
              </a>
            </li>
            <li>
              <a>
              <Linkedin />
                Linkedin
              </a>
            </li>
            <li>
              <a>
              <Gmail />
                Gmail
              </a>
            </li>
            <li>
              <a>
              <Whatsapp />
                WhatsApp
              </a>
            </li>
            <li>
              <a>
              <Behance />
                Behance
              </a>
            </li>
          </ul>
        </div>
        <div className={"footer__container__img"}>
          <img src={moon} alt="moon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
