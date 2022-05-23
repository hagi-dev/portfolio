import React from "react";
import { Navigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import Person from "../../assets/images/person.png";
import logo from "../../assets/images/logo.png";
import ArrowScroll from "../../assets/icons/ArrowScroll";
import "./style.scss";
import { Color } from "three";

const Home = ({ param }) => {
  const [state, setState] = React.useState("initial");
  const handleClick = () => {
    console.log("clicked about");
    return <Navigate to="/about" />;
  };
  React.useEffect(() => {
    let initial=0;
    const handleScroll = () => {
      if (window.scrollY === 0) {
        return setState('initial');
      }
      else if(initial>window.scrollY){
        return setState('show');
      }
      else{
        return setState('notShow');
      }
    }
    initial = window.scrollY;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })
  return (
    <div className={`home`} id="home" ref={param}>
      <Link
        onClick={handleClick}
        to={`contac`}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className={`home__contac ${state}`}
      >
        Contacto
      </Link>
      <div onClick={handleClick} className={`home__logo ${state}'}`}>
        <img src={logo} />
      </div>
      <div className={`home__container`}>
        <div className={`home__container__image item`} style={{ "--order": 2 }}>
          <img src={Person} alt={"ilustracion persona"} />
        </div>
        <div className={`home__container__text`}>
          <h1 className="item" style={{ "--order": 4 }}>
            Hola, soy <span>Hagi Torres</span>
          </h1>
          <h2 className="item" style={{ "--order": 5 }}>
            Desarrollador web y analista de sistemas informaticos
          </h2>
        </div>
        <div className={`home__container__scroll`}>
          <h3 className="item" style={{ "--order": 6 }}>
            ¿ Quieres saber mas de mi ?
          </h3>
          <div className={`home__container__scroll__icon`}>
            <p>Quiero saber mas</p>
            <ArrowScroll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
