import React from "react";
import './personagens.css'
import { Gi3DHammer, GiBookmarklet, GiWolfHowl } from 'react-icons/gi'
import wr from '../../assets/img/guerreiro.png'
import mg from '../../assets/img/guerreiro.jpg'
import dr from '../../assets/img/druida.jpg'

export const Personagens = () => {

  const card = [
    { nome: "Mathaius", icon: <Gi3DHammer size={40} />, img:wr, classe:"Guerreiro" },
    { nome: "Bira", icon: <GiBookmarklet size={40} />, img:mg, classe:"Mago"  },
    { nome: "JohnKoult", icon: <GiWolfHowl size={40} />, img:dr, classe:"Druida" },
    { nome: "JohnEnder", icon: <Gi3DHammer size={40} />, img:wr, classe:"Guerreiro" },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} />, img:wr, classe:"Guerreiro" },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} />, img:wr, classe:"Guerreiro" },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} />, img:wr, classe:"Guerreiro" },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} />, img:wr, classe:"Guerreiro" },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} />, img:wr, classe:"Guerreiro" },
    { nome: "JohnKoult", icon: <Gi3DHammer size={40} />, img:wr, classe:"Guerreiro" },

  ]
  return (
    <div className="all">
      <h1>Personagens</h1>
      <div className="tela">
        {card.map((info) =>
          <div className="caracters glass">
            <h2>{info.nome}</h2>
            <img src={info.img} alt="wr" className="imagem"/>
            <div className="infor">
              <div className="icon">{info.icon}</div>
              <div className="title">{info.classe}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}