// MainFunctions.js
import { useContext, useState } from 'react';
import Database from '../context/Database';
import { useInt } from './newfunction';


export const usePericias = () => {
 const [isChecked, setChecked] = useState({
  Acrobacia: false,
  Adestrar_Animais: false,
  Atletismo: false,
  Atuação: false,
  Atuação: false,
  Cavalgar: false,
  Conhecimento: false,
  Conhecimento: false,
  Cura: false,
  Diplomacia: false,
  Enganação: false,
  Furtividade: false,
  Identificar: false,
  Magia: false,
  Iniciativa: false,
  Intimidação: false,
  Intuição: false,
  Ladinagem: false,
  Obter: false,
  Informação: false,
  Ofício: false,
  Ofício: false,
  Percepção: false,
  Sobrevivência: false,
 });
 const { personagem, setPersonagem } = useContext(Database)
 const { meioNv } = useInt();

 const handleToggle = (event) => {
  const { id } = event.target;
  setChecked(isChecked => ({ ...isChecked, [id]: !isChecked[id] }))
 };
 const treino = (nome, habilidade, penalidade) => {
  const nivel = personagem['basicos']['nivel'];
  Object.entries(isChecked).forEach(([key, value]) => {
   console.log(key, value);
   if(key = nome) {
    
   }
  });
 }//

 const pericias = [
  { nome: "Acrobacia", habilidade: "des", penalidade: true },
  { nome: "Adestrar Animais", habilidade: "car", penalidade: false },
  { nome: "Atletismo", habilidade: "for", penalidade: true },
  { nome: "Atuação", habilidade: "car", penalidade: false },
  { nome: "Atuação", habilidade: "car", penalidade: false },
  { nome: "Cavalgar", habilidade: "des", penalidade: false },
  { nome: "Conhecimento", habilidade: "int", penalidade: false },
  { nome: "Conhecimento", habilidade: "int", penalidade: false },
  { nome: "Cura", habilidade: "sab", penalidade: false },
  { nome: "Diplomacia", habilidade: "car", penalidade: false },
  { nome: "Enganação", habilidade: "car", penalidade: false },
  { nome: "Furtividade", habilidade: "dees", penalidade: true },
  { nome: "Identificar Magia", habilidade: "int", penalidade: false },
  { nome: "Iniciativa", habilidade: "des", penalidade: false },
  { nome: "Intimidação", habilidade: "car", penalidade: false },
  { nome: "Intuição", habilidade: "sab", penalidade: false },
  { nome: "Ladinagem", habilidade: "des", penalidade: false },
  { nome: "Obter Informação", habilidade: "car", penalidade: false },
  { nome: "Ofício", habilidade: "int", penalidade: false },
  { nome: "Ofício", habilidade: "int", penalidade: false },
  { nome: "Percepção", habilidade: "sab", penalidade: false },
  { nome: "Sobrevivência", habilidade: "sab", penalidade: false },]



 return { handleToggle, pericias };
};

// export function useInt() {
//   const { personagem, setPersonagem } = useContext(Database)
//   const InputChangeInt = (event) => {
//    const { name, value, id } = event.target;
//    let valor = value ? value : 0;
//    setPersonagem(personagem => ({ ...personagem, [id]: { ...personagem[id], [name]: parseInt(valor) } }))
//   };
//  }
