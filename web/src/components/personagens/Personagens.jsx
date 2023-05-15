import React from "react";
import './personagens.css'
import { Gi3DHammer, GiBookmarklet, GiThorHammer, GiWolfHowl } from 'react-icons/gi'
import wr from '../../assets/img/guerreiro.png'
import mg from '../../assets/img/guerreiro.jpg'
import dr from '../../assets/img/druida.jpg'

export const details = { color: "", height:"2.5em", width:"2.5em" }
export const Personagens = () => {

  
  const card = [
    { nome: "Mathaius", icon: <GiThorHammer style={details} />, img:wr, classe:"Guerreiro" },
    { nome: "Bira", icon: <GiBookmarklet style={details} />, img:mg, classe:"Mago"  },
    { nome: "JohnKoult", icon: <GiWolfHowl style={details} />, img:dr, classe:"Druida" },
    { nome: "JohnEnder", icon: <Gi3DHammer style={details} />, img:wr, classe:"Guerreiro" },
    { nome: "JohnKoult", icon: <Gi3DHammer style={details} />, img:wr, classe:"Guerreiro" },
    { nome: "JohnKoult", icon: <Gi3DHammer style={details} />, img:wr, classe:"Guerreiro" },
    { nome: "JohnKoult", icon: <Gi3DHammer style={details} />, img:wr, classe:"Guerreiro" },
    { nome: "JohnKoult", icon: <Gi3DHammer style={details} />, img:wr, classe:"Guerreiro" },
    { nome: "JohnKoult", icon: <Gi3DHammer style={details} />, img:wr, classe:"Guerreiro" },
    { nome: "JohnKoult", icon: <Gi3DHammer style={details} />, img:wr, classe:"Guerreiro" },

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