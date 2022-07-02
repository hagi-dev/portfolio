import React, { useRef } from "react";
import Slider from "react-slick";

import "./style.scss";
import Card from "./Card/Card";

const Skills = ({ param, state }) => {
  const ref = useRef(null);
  const skills = [
    {
      name: "HTML",
      percentage: "90",
    },
    {
      name: "CSS",
      percentage: "90",
    },
    {
      name: "JavaScript",
      percentage: "80",
    },
    {
      name: "Node.js",
      percentage: "60",
    },
    {
      name: "php",
      percentage: "40",
    },
    {
      name: "java",
      percentage: "60",
    },
    {
      name: "docker",
      percentage: "50",
    },
    {
      name: "SQL",
      percentage: "70",
    },
    {
      name: "MySQL",
      percentage: "70",
    },
    {
      name: "PostgreSQL",
      percentage: "70",
    },
  ];
  const tools = [
    {
      name: "React",
      percentage: "75",
    },
    {
      name: "Redux",
      percentage: "75",
    },
    {
      name: "Express",
      percentage: "60",
    },
    {
      name: "figma",
      percentage: "60",
    },
    {
      name: "Git",
      percentage: "60",
    },
    {
      name: "Github",
      percentage: "60",
    },
    {
      name: "Material UI",
      percentage: "80",
    },
    {
      name: "Sass",
      percentage: "60",
    },
    {
      name: "JasonWebToken",
      percentage: "50",
    },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };


  return (
    <div className={`skills`} ref={param}>
      <h1 className={`skills__title`}>Skills</h1>
      <div className={`skills__container`}>
        <div className={`skills__container__tecnique`}>
          <div className={`skills__container__tecnique__lenguaje`}>
            <h1 >Lenguajes y gestores de Base de datos</h1>
            <Slider {...settings}>
              {skills.map((skill, index) => (
                <Card
                  view={state}
                  background={
                    index % 2 === 0
                      ? "rgba(28, 37, 65, 1)"
                      : "rgba(111, 255, 233, 1)"
                  }
                  valueBar={
                    index % 2 === 0
                      ? "rgba(111, 255, 233, 1)"
                      : "rgba(28, 37, 65, 1)"
                  }
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </Slider>
          </div>
          <div className={`skills__container__tecnique__technology`}>
            <h1>Herramientas, librerias y framework</h1>
            <Slider {...settings2}>
              {tools.map((tool, index) => (
                <Card
                  view={state}
                  background={
                    index % 2 === 0
                      ? "rgba(28, 37, 65, 1)"
                      : "rgba(111, 255, 233, 1)"
                  }
                  valueBar={
                    index % 2 === 0
                      ? "rgba(111, 255, 233, 1)"
                      : "rgba(28, 37, 65, 1)"
                  }
                  key={index}
                  name={tool.name}
                  percentage={tool.percentage}
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className={`skills__container__soft`}>
          <h1 className="skills__container__soft-title">Soft</h1>
          <ul>
            <li>Trabajo en equipo</li>
            <li>Analisis del problema</li>
            <li>Buena comunicacion</li>
            <li>Positivismo</li>
            <li>Autodidacta</li>
            <li>Gestion de requerimientos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
