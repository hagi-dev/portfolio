import React, { useState } from "react";

import Button from "./Button/Button.jsx";
import { ProviderStateButton } from "./context/contextState";
import "./style.scss";

const NavBar = ({section}) => {
  const [state, setState] = useState({
    Home: true,
  });
  return (
    <ProviderStateButton value={{state,setState}}>
        <div className={`navBar`}>
          <Button name="Home" text="home" id={'homeLink'} order={1}  param={section}/>
          <Button name="About" text="about" id={'aboutLink'} order={2}   param={section}/>
          <Button name="Skills" text="skills" id={'skillsLink'} order={3}   param={section}/>
          <Button name="Project" text="proyectos" id={'projectLink'} order={4}  param={section} />
        </div>
      </ProviderStateButton>
  );
};

export default NavBar;
