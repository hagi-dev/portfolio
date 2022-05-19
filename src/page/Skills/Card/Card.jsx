import React from "react";
import { keyframes } from "styled-components";

import "./Card.scss";

const Card = ({ name, percentage, background, valueBar, view }) => {
//   var load = keyframes`
//     0% { width: 0}
//     100% { width: ${percentage}%}
// `;


  return (
    <div className={`card`} style={{backgroundColor: background}}>
      <h1 className="card__name" style={{color: valueBar}}>{name}</h1>
      <div className={`card__progress`}>
        <div className={`card__progress-value ${view && 'active'}`} style={{width: view ? `${percentage}%`: '5px',background: valueBar}}></div>
      </div>
      <h3 className="card_percentage" style={{color: valueBar}}>{percentage}%</h3>
    </div>
  );
};

export default Card;
