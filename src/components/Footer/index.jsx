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
          <h1 className="footer_title">Contactarme en :</h1>
          <ul>
            <li>
              <a target="_blank" href="https://github.com/hagi-dev">
              <Github />
                Github
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/hagitorres/">
              <Linkedin />
                Linkedin
              </a>
            </li>
            <li>
              <a target="_blank" href="mailto:hagiraitorresmacedo@gmail.com">
              <Gmail />
                Gmail
              </a>
            </li>
            <li>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=973159686&text=Hola,%20quiero%20comunicarme%20contigo">
              <Whatsapp />
                WhatsApp
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.behance.net/hagitorresmacedo">
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
