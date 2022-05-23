import React from "react";
import ReactPlayer from "react-player";
import { useParams, Link } from "react-router-dom";

import "./style.scss";

const DetailProject = () => {
  const { name } = useParams();
  const data = [
    {
      name: "Pokemon App",
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
  const project = data.find((item) => item.name === name);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="detailProject">
        <div className="detailProject__header">
            <Link to="/">ir ahome</Link>
        </div>
      <div className="detailProject__container">
        <div className="detailProject__container-video">
          <ReactPlayer
            width="100%"
            height="100%"
            url={project.url}
            controls
            volume={0.7}
            playing
            className="react-player"
          />
        </div>
        <div className="detailProject__container__text">
          <div className="detailProject__container__text-container">
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <ul>
              {project.descriptionList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
