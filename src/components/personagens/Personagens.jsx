import React from "react";
import './personagens.css'
import { Gi3DHammer } from 'react-icons/gi'
import wr from '../../assets/img/guerreiro.png'

export const Personagens = () => {

  const card = [
    { nome: "Mathaius", icon: <Gi3DHammer size={40} /> },
    { nome: "Bira", icon: <Gi3DHammer size={40} /> },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} /> },
    { nome: "JohnEnder", icon: <Gi3DHammer size={40} /> },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} /> },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} /> },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} /> },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} /> },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} /> },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} /> },

  ]
  return (
    <div className="all">
      <h1>Personagens</h1>
      <div className="tela">
        {card.map((info) =>
          <div className="caracters glass">
            <h2>{info.nome}</h2>
            <img src={wr} alt="wr" className="imagem"/>
            <div className="infor">
              <div className="icon">{info.icon}</div>
              <div className="title">Guerreiro</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}