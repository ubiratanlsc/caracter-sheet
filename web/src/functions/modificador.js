// MainFunctions.js
import { useContext } from 'react';
import Database from '../context/Database';

export const useModificador = () => {
 const { personagem, setPersonagem } = useContext(Database)

 function alteraModificador(valor) {
  let resultado = valor - 10;
  resultado /= 2;
  resultado = Math.floor(resultado);
  return resultado;
 }

 const { habilidades: valorHab } = personagem;
 const arrayModificador = []
 let modificadores = {};

 let contador = 0;
 let total = 0;
 Object.keys(valorHab).forEach((chave) => {
  let chaveAtual = `${chave}`.substring(0, 3)
  total = total += parseInt(valorHab[chave]);
  contador++
  if (contador == 3) {
   let modificador = alteraModificador(total)
   const obj = new Object()
   obj[`${chaveAtual}Mod`] = modificador;
   arrayModificador.push(obj);
   total = 0;
   contador = 0;
  }
 });
 modificadores = arrayModificador.reduce((resultado, objeto) => {
  return { ...resultado, ...objeto };
 }, {});
 return { modificadores };
};
