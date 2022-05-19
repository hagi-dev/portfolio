import React from "react";

import usp from "../../assets/images/usp.png";
import soyHenry from "../../assets/images/soyHenry.png";
import "./style.scss";

const About = ({ param, state }) => {
  return (
    <div className="about" id="about" ref={param}>
      <div className={`about__container`}>
        <div className={`about__container__description ${state ? 'active':'none'}`}>
          <h1>Sobre mi</h1>
          <p>
            En esta etapa de nuestra era la tecnología avanza muy rápido,
            conmigo encontraras un autodidacta que le apasiona aprender las
            nuevas tecnologías que facilitan y brindan mayor ventaja al realizar
            un proyecto para un negocio, donde mi principal característica es
            analizar el contexto y los requerimientos para que un proyecto se
            enfoque en la resolucion del problema.
          </p>
        </div>
        {console.log("about ", state)}
        <div className={`about__container__study ${state ? 'active':'none'}`}>
          <h1>Estudios</h1>
          <div className={`about__container__study__item`}>
            <div className={`about__container__study__item__university`}>
              <img src={usp} />
              <h2>Universidad San Pedro</h2>
            </div>
            <h3>Ingenieria informatica y de sistemas</h3>
          </div>
          <div className={`about__container__study__item`}>
            <div className={`about__container__study__item__university`}>
              <img src={soyHenry} />
              <h2>Soy Henry</h2>
            </div>
            <h3>Full stack development </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
