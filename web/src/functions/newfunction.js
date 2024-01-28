// MainFunctions.js
import { useContext, useState } from 'react';
import Database from '../context/Database';


export const useInt = () => {
 const { personagem, setPersonagem } = useContext(Database)

 const InputChangeInt = (event) => {
  const { name, value, id } = event.target;
  console.log(`Name:${name} value:${value} id:${id} `);
  let valor = value ? value : 0;
  setPersonagem(personagem => ({ ...personagem, [id]: { ...personagem[id], [name]: parseInt(valor) } }))
 };

 let nv = personagem['basicos']['nivel'] ? personagem['basicos']['nivel'] : 0
 let meioNv = nv / 2
 meioNv = Math.floor(meioNv)

 return { InputChangeInt, meioNv };
};

// export function useInt() {
//   const { personagem, setPersonagem } = useContext(Database)
//   const InputChangeInt = (event) => {
//    const { name, value, id } = event.target;
//    let valor = value ? value : 0;
//    setPersonagem(personagem => ({ ...personagem, [id]: { ...personagem[id], [name]: parseInt(valor) } }))
//   };
//  }
