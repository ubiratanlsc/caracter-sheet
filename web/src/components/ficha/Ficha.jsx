import React, { useContext, useEffect, useState } from "react";
import InputFormText from "../../form/InputFormText";
import InputFormButton from "../../form/InputFormButton";
import Database from "../../context/database.jsx";
function Ficha() {
  // console.log(status[habilidadess]);
  const { personagem, setPersonagem } = useContext(Database)
  const habilidadess = { ...personagem.habilidades }
  console.log(personagem);
  // console.log(habilidadess);
  const [habilidades, setHabilidades] = useState({
    forr: 10, forPen: 0, forBon: 0,
    des: 10, desPen: 0, desBon: 0,
    con: 10, conPen: 0, conBon: 0,
    int: 10, intPen: 0, intBon: 0,
    sab: 10, sabPen: 0, sabBon: 0,
    car: 10, carPen: 0, carBon: 0
  });
  const [historico, setHistorico] = useState([])
  const array = ["for", "des", "con", "int", "sab", "car"]
  let nv = habilidades.nivel ? habilidades.nivel : 0
  let meioNv = nv / 2
  meioNv = Math.floor(meioNv)
  function alteraArmadura() {
    let base = 10;
    let modHab = habilidades.desBon
    let armadura = habilidades['armadura'] ? habilidades['armadura'] : 0
    let escudo = habilidades['escudo'] ? habilidades['escudo'] : 0
    let outros = habilidades['outros'] ? habilidades['outros'] : 0
    let tamanho = habilidades['tamanho'] ? habilidades['tamanho'] : 0
    let penalidadeCA = habilidades['penalidadeCA'] ? habilidades['penalidadeCA'] : 0
    let somaCA = base + meioNv + modHab + armadura + escudo + outros
    let subCA = somaCA - penalidadeCA
    // console.log(subCA);
    return subCA;
  }
  let sub = alteraArmadura()
  function alteraModificador(valor) {
    let resultado = valor - 10;
    resultado /= 2;
    resultado = Math.floor(resultado);
    return resultado;
  }
  const { habilidades: valorHab } = personagem;
  const arrayModificador = []
  let modificadores = {};
  function modificador() {
    let contador = 0;
    let total = 0;
    Object.keys(valorHab).forEach((chave) => {
      let chaveAtual = `${chave}`.substring(0, 3)
      total = total += parseInt(valorHab[chave]);
      contador++
      if (contador == 3) {
        let modificador = alteraModificador(total)
        const obj = new Object()
        obj[`${chaveAtual}Mod`]= modificador;
        arrayModificador.push(obj);
        total = 0;
        contador = 0;
      }
    });
    modificadores = arrayModificador.reduce((resultado, objeto) => {
      return { ...resultado, ...objeto };
    }, {});
    
  } modificador()
  // setHabilidades(habilidades => ({ ...habilidades, identificador: parseInt(resultado) }))
  const atualizarResultado = (name, value) => {
    // const { habilidades: valorFor, forPen, forMod } = personagem;
    // const soma = parseInt(value) + parseInt(habilidadess[`${newName}Bon`]) - parseInt(habilidadess[`${newName}Pen`])
    // console.log(soma);
    // const sub = soma - 10;
    // const div = sub / 2;
    // const result = Math.floor(div);
    // setPersonagem({ ...personagem, ['habilidades']: {...personagem['habilidades'], ['forMod']:  parseInt(novoResultado)}});
    // setPersonagem(personagem => ({ ...personagem, ['habilidades']: {...personagem['habilidades'], ['forMod']:  parseInt(novoResultado)}}))
  };
  // atualizarResultado()
  const handleInputChange = (event) => {
    const { name, value, id } = event.target;
    let valor = value ? value : 0;
    setPersonagem(personagem => ({ ...personagem, [id]: { ...personagem[id], [name]: parseInt(valor) } }))
    if (id == 'habilidades') {
      atualizarResultado(name, value)
    }
  };
  const [valorInput, setValorInput] = useState();
  const handleHistoricoChange = (event) => {
    const { name, value } = event.target;
    const color = event.target.attributes.cor.value
    setValorInput(valorInput => ({ ...valorInput, name: name, 'value': value, 'color': color }))
  };
  const handleClick = () => {
    setHistorico((historico) => [...historico, valorInput]);
    const inputElement = document.querySelector(`input[name="${valorInput.name}"]`)
    const scroll = document.querySelector(".scroll-bar")
    scroll.scrollTo(scroll.scrollWidth, 0);
    scroll.scrollIntoView({ block: 'center' });
    inputElement.value = ''
  };
  const removeLastElement = () => {
    const newArray = historico.slice(0, -1);
    setHistorico(newArray);
  };
  const removeAllElement = () => {
    const newArray = [];
    setHistorico(newArray);
  };
  return (
    <div className="grid grid-cols-12 gap-3">
      <header className="">
        <h1 className="text-white">Mathaius</h1>
      </header>
      <section className="glass col-span-12 flex flex-wrap gap-3 pl-4 pb-4">
        <InputFormText legenda="Raça" tamanho={"w-72"} />
        <InputFormText legenda="Classe" tamanho={"w-72"} />
        <InputFormText legenda="Nome" tamanho={"w-72"} />
        <InputFormText legenda="Tendencia" tamanho={"w-72"} />
        <InputFormText legenda="Tamanho" tamanho={"w-72"} />
        <InputFormText legenda="Sexo" tamanho={"w-72"} />
        <InputFormText legenda="Idade" tamanho={"w-72"} />
        <InputFormText legenda="Divindade" tamanho={"w-72"} />
        <InputFormText legenda="Deslocamento" tamanho={"w-72"} />
        <InputFormText legenda="Nivel" tamanho={"w-72"} id="nivel" name="nivel" handle={handleInputChange} />
      </section>
      <section className="glass col-span-2 justify-center flex flex-wrap p-2">
        <div className="flex gap-1 items-end absolute top-1">
          <div className=" text-center text-white text-xs w-20 rounded">Habilidade</div>
          <div className=" text-center text-white text-xs w-10 rounded">MOD</div>
          <div className=" text-center text-white text-xs w-10 rounded">BONUS</div>
          <div className=" text-center text-white text-xs w-10 rounded">DANO</div>
        </div>
        {array.map((item) =>
          <div className="flex gap-1 items-end" key={item}>
            <InputFormText legenda={item.toUpperCase()} id={'habilidades'} name={item} tamanho={"w-20"} handle={handleInputChange} value={personagem.habilidades[`${item}`]} />
            <InputFormText tamanho={"w-10"} value={modificadores[`${item}Mod`]} color={"bg-tormenta"} readonly />
            <InputFormText tamanho={"w-10"} id={`habilidades`} name={`${item}Bon`} handle={handleInputChange} color={"bg-tormenta"} value={personagem.habilidades[`${item}Bon`]} />
            <InputFormText tamanho={"w-10"} id={`habilidades`} name={`${item}Pen`} handle={handleInputChange} color={"bg-tormenta"} value={personagem.habilidades[`${item}Pen`]} />
          </div>)}
      </section>
      <section className="col-span-7 flex gap-3 flex-col">
        <section className="glass flex gap-3 flex-wrap justify-center items-end pb-5">
          <InputFormText legenda="Pontos de Vida" tamanho={"w-48"} />
          {/* <InputFormText legenda="Historico de Dano" tamanho={"w-48"} value={arrayDano} /> */}
          <fieldset>
            <legend className="text-slate-100 relative top-2 text-sm ml-3">historico de Dano</legend>
            <div className="bg-black text-white w-48 h-9 rounded flex items-center justify-around gap-1 overflow-auto scroll-bar px-4">
              {historico.map((item, index) =>
                <div key={index}>
                  <div className={`text-${item.color} font-semibold`}>{item.value}</div>
                </div>)}
            </div>
          </fieldset>
          <InputFormText legenda="Cura" name="cura" cor="verde" tamanho={"w-36"} handle={handleHistoricoChange} />
          <InputFormButton icon={"up"} click={handleClick} />
          <InputFormText legenda="Dano" name="dano" cor="vermelho" tamanho={"w-36"} handle={handleHistoricoChange} />
          <InputFormButton icon={"down"} click={handleClick} />
          <InputFormButton icon={"apagar"} click={removeLastElement} />
          <InputFormButton icon={"lixo"} click={removeAllElement} />
        </section>
        <section className="glass flex gap-3 flex-wrap justify-center items-end pb-5">
          <fieldset>
            <legend className="text-slate-100 relative top-2 text-sm ml-3">CA</legend>
            <div className="bg-black text-white w-28 h-9 rounded flex items-center justify-around gap-1">
            </div>
          </fieldset>
          <InputFormText legenda='&#189; Nivel' tamanho="w-28" />
          <InputFormText legenda='Habilidade' tamanho="w-28" value={modificadores.desMod} />
          <InputFormText legenda='Armadura' tamanho="w-28" />
          <InputFormText legenda='Escudo' tamanho="w-28" />
          <InputFormText legenda='Tamanho' tamanho="w-28" />
          <InputFormText legenda='Outros' tamanho="w-28" />
        </section>
      </section>
      <section className="glass flex col-span-3 gap-3 flex-wrap h-20 justify-center items-end pb-9">

      </section>
    </div>
  )
}
export default Ficha