import Database from './context/Database';
import './index.css'
import Ficha from './components/ficha/Ficha';
import { useState } from 'react';
function App() {
  const [personagem, setPersonagem] = useState({
    basicos: {
      nome: '', classe: '', raça: '',
      tendencia: '', tamanho: '', sexo: '', idade: '',
      divindade: '', deslocamento: '', nivel: 1,
    },
    defesas: {
      totalCA: 0, meioNivel: 0, habilidade: 0,
      armadura: 0, escudo: 0, penalidadeTamanho: 0,
      base: 10, outros: 0, penalidadeOutros: 0,
      fortOutros: 0, reflOutros: 0, vontOutros: 0
    },
    habilidades: {
      for: 10, forPen: 0, forBon: 0,
      des: 10, desPen: 0, desBon: 0,
      con: 10, conPen: 0, conBon: 0,
      int: 10, intPen: 0, intBon: 0,
      sab: 10, sabPen: 0, sabBon: 0,
      car: 10, carPen: 0, carBon: 0,
    }
  })
  // console.log(personagem);
  console.log(personagem);
  return (
    <Database.Provider value={{ personagem, setPersonagem }}>
      <div className="bg-hero bg-cover" >
        <Ficha />
      </div>
    </Database.Provider>
  )
}

export default App
