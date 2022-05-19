import React, { useContext, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Button.scss";
import Home from "../../../assets/icons/Home.jsx";
import About from "../../../assets/icons/About.jsx";
import Skills from "../../../assets/icons/Skills.jsx";
import Project from "../../../assets/icons/Project";
import ContextState from "../context/contextState";

const Button = (props) => {
  const { name, onClick, text, id , param, order } = props;
  const button = useContext(ContextState);
  const img = (option) => {
    switch (option) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Skills":
        return <Skills />;
      case "Project":
        return <Project />;
    }
  };

  const handleClick = () => {
    button.setState(() => {
      return {
        [name]: true,
      };
    });
  };
  React.useEffect(() => {
    const statateTrue = param && param.find( (element) => element.state === true);
    const name2 = statateTrue && statateTrue.name;
    const state2 = statateTrue && statateTrue.state;
    button.setState(() => {
      return {
        [name2]: state2,
      };
    });
  },[param]);

  return (
    <Link
      id={id}
      style={{"--orderNavBar": order}}
      className={`icon`}
      onClick={handleClick}
      to={`${text}`}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <h3 className={`icon__text ${button.state[name] && "active"}`}>{text}</h3>
      <button className={`icon__button ${button.state[name] && "active"}`}>
        <span>{img(name)}</span>
      </button>
    </Link>
  );
};

export default Button;
