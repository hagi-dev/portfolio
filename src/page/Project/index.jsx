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
      url: "https://youtu.be/hAQptyCroek",
      description:
        "Desarrollo de Un SPA utilizando en la parte del diseño Figma, en la parte del Frontend utilice React JS para crear los componentes, Redux para manejar los estados del SPA, Pre Procesador SASS para dar estilos a mis componentes, así como para la obtencion de datos utilizamos json-server, donde las características realizadas son:",
      descriptionList: [
        "Mostrar los Pokemons en el home",
        "Filtrara, ordenar y buscar los Pokemons",
        "Mostrar los detalles del Pokemon",
      ],
    },
    {
      name: "App Gestion de personal",
      image: gestion,
      url: "https://youtu.be/x58aLslRay8",
      description:
        "Desarrollo de app web para la gestión de personal de la empresa MS MULTIBUSSINE, donde se realizó el proyecto en equipo de dos de las cuales utilizamos la metodología UWE, mi rol fue la de análisis de requerimientos, diseño de las interfaces con Figma, Frontend donde utilice React JS para crear los componentes, Pre Procesador SASS para dar estilos a mis componentes, así como para el Backend utilice Node JS para el api, MySQL para la base de datos, donde las características realizadas son:",
      descriptionList: [
        "Gestionar contratos del personal",
        "Gestionar datos del personal",
        "Gestionar los horarios de trabajo",
        "Gestionar los permisos del personal",
        "Getion de la jornada Laboral",
      ],
    },
    {
      name: "App Videogame",
      image: game,
      url: "https://youtu.be/Atd3INHR8BM",
      description:
        "Desarrollo de Un SPA utilizando en la parte del diseño Figma, en la parte del Frontend utilice React JS para crear los componentes, Redux para manejar los estados del SPA, Pre Procesador SASS para dar estilos a mis componentes, así como para el Backend utilice Node JS para el api, PostgreSQL para la base de datos, donde las características realizadas son:",
      descriptionList: [
        "LandigPage",
        "Mostrar los Videogames en el home",
        "Filtrara, ordenar y buscar los videojuegos",
        "Mostrar los detalles del videojuego",
        "Crear un videojuego",
      ],
    },
  ];
  return (
    <div className={`project`} id={"proyectos"} ref={param}>
      <h1 className={`project__title`}>Poyectos</h1>
      <div className="project__container">
        {data.map((project, index) => {
          return (
            <Link
              to={`/proyecto/${project.name}`}
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
