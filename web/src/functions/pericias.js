// MainFunctions.js
import { useContext, useState } from 'react';
import Database from '../context/Database';
import { useInt } from './newfunction';
import { useModificador } from './modificador';


export const usePericias = () => {
 const [isChecked, setChecked] = useState({
  Acrobacia: true,
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
 const { modificadores } = useModificador()
 const { meioNv } = useInt();
 const handleToggle = (event) => {
  const { id } = event.target;
  setChecked(isChecked => ({ ...isChecked, [id]: !isChecked[id] }))
 };
 let arrayPericias = []
 const treino = (nome, habilidade, penalidade) => {
  const nivel = personagem['basicos']['nivel']
  const mod = modificadores[`${habilidade}Mod`]
  const outros = 0;
  const penalidades = 0;
  let graduacao = 0;
  if (isChecked[nome] == true) {
   return graduacao = nivel + 3 + mod + outros - penalidades;
  } else {
   return graduacao = Math.floor(nivel / 2) + mod + outros - penalidades;
  }
 }


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
  { nome: "Furtividade", habilidade: "des", penalidade: true },
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


 return { handleToggle, treino, isChecked, setChecked, pericias, treino};
};
