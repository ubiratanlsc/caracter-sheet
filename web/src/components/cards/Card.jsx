import React, { useState } from "react";

function Card({props}) {
  return (
    <>
      {props == 1 ?
        <div className="acord">
          <div className="acord-titulo">arcanaAt.titulo</div>
          <p>arcanaAt.beneficio</p>
        </div> : null
      }
    </>
  )
} 

export default Card