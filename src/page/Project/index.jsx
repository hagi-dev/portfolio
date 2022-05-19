import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import pokemon from "../../assets/images/LandingPage Pokemon.png";
import game from "../../assets/images/Frame 1.png";
import gestion from "../../assets/images/LandingPage Gestion.png";

const Project = ({ param, state }) => {
  const data = [
    {
      name: "Pokemon App",
      image: pokemon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "App Gestion de personal",
      image: gestion,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "App Videogame",
      image: game,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div className={`project`} id={"proyectos"} ref={param}>
      <h1>Poyectos</h1>
      <div className="project__container">
        {data.map((project, index) => {
          return (
            <Link
              to={`/proyecto/${index}`}
              className="project__container__item"
            >
              <div className="project__container-item-title">
              <h1>{project.name}</h1>
              </div>
              <img src={project.image} alt={project.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
