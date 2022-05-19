import React from "react";
import { Link } from "react-router-dom";

const Default = () => {
  return (
    <div
    style={{
        textAlign: "center",
        marginTop: "15%",
    }}>
      <h1
        style={{
          color: "white",
          fontFamily: "mulish",
          fontSize: "4rem",
          fontWeight: "900",
        }}
      >
        404
      </h1>
      <p
        style={{
          color: "white",
          fontFamily: "mulish",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        no se encontro la pagina
      </p>
      <Link
        to="/"
        style={{
          color: "rgba(111, 255, 233, 1);",
          fontFamily: "mulish",
          fontSize: "1.5rem",
          fontWeight: "600",
          cursor: "pointer"
        }}
      >
        ir a Home
      </Link>
    </div>
  );
};


export default Default;
