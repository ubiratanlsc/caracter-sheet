import { useContext, useState } from 'react';
import Database from '../context/Database';
import { useModificador } from './modificador';
import { useInt } from './newfunction';
// ver como o tamanho influencia nas regras


export const useDefesas = () => {
 const { personagem, setPersonagem } = useContext(Database)
 const { modificadores } = useModificador()
 const { meioNv } = useInt();

 const InputChangeInt = (event) => {
  const { name, value, id } = event.target;
  let valor = value ? value : 0;
  setPersonagem(personagem => ({ ...personagem, [id]: { ...personagem[id], [name]: parseInt(valor) } }))
 };

 let base = 10;
 let modHab = modificadores['desMod']
 let armaduras = ['armadura0', 'armadura1', 'armadura2', 'armadura3', 'armadura4', 'armadura5'];
 let somaArmaduras = armaduras.reduce((total, tipo) => total + (personagem['defesas'][tipo] || 0), 0);
 let outros = personagem['defesas']['outros'] ? personagem['defesas']['outros'] : 0
 let tamanho = personagem['defesas']['tamanho'] ? personagem['defesas']['tamanho'] : 0
 let penalidadeCA = personagem['defesas']['penalidadeCA'] ? personagem['defesas']['penalidadeCA'] : 0
 let somaCA = base + meioNv + modHab + somaArmaduras + outros
 let classe_armadura = somaCA - penalidadeCA
 // fortOutros: 0, vontOutros: 0, reflOutros: 0
 let fortitude = meioNv + modificadores['conMod'] + personagem['defesas']['fortOutros']
 let reflexos = meioNv + modificadores['desMod'] + personagem['defesas']['reflOutros']
 let vontade = meioNv + modificadores['sabMod'] + personagem['defesas']['vontOutros']

 return { classe_armadura, somaArmaduras, tamanho, outros, fortitude, reflexos, vontade};
};

// export function useInt() {
//   const { personagem, setPersonagem } = useContext(Database)
//   const InputChangeInt = (event) => {
//    const { name, value, id } = event.target;
//    let valor = value ? value : 0;
//    setPersonagem(personagem => ({ ...personagem, [id]: { ...personagem[id], [name]: parseInt(valor) } }))
//   };
//  }
