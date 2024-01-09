import React, { useContext, useEffect, useState } from "react";
import InputFormText from "../../form/InputFormText";
import InputFormButton from "../../form/InputFormButton";
import Database from "../../context/Database.jsx";
import Row from "../components/Row.jsx";
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
        obj[`${chaveAtual}Mod`] = modificador;
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
  let [valorInput, setValorInput] = useState();
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
    <div className="grid grid-cols-24 gap-y-3 gap-x-3">
      <header className="col-span-full">
        <h1 className="text-white">Mathaius</h1>
      </header>
      <section className="glass col-span-full flex flex-wrap-reverse gap-y-3 gap-x-3 pb-3 px-4">

        <InputFormText grow legenda="Raça" />
        <InputFormText grow legenda="Classe" />
        <InputFormText grow legenda="Tendencia" />
        <InputFormText grow legenda="Tamanho" />
        <InputFormText grow legenda="Sexo" />
        <InputFormText grow legenda="Idade" />
        <InputFormText grow legenda="Deslocamento" />
        <InputFormText grow legenda="Nivel" id="nivel" name="nivel" handle={handleInputChange} />
        <InputFormText grow legenda="Nome" />
        <InputFormText grow legenda="Divindade" />
      </section>
      <section className="glass col-span-4 pb-4 max-w-72 md:px-1 2xl:px-0">
        <div className="flex gap-2 items-end w-full justify-center mt-2  rounded">
          <div className=" text-center text-white 2xl:text-sm md:text-mp ">Habilidade</div>
          <div className=" text-center text-white 2xl:text-sm md:text-mp ">MOD</div>
          <div className=" text-center text-white 2xl:text-sm md:text-mp ">BONUS</div>
          <div className=" text-center text-white 2xl:text-sm md:text-mp ">DANO</div>
        </div>
        {array.map((item) =>
          <div className="flex items-end md:gap-x-1 2xl:gap-x-2 justify-center" key={item}>
            <InputFormText tamanho={"2xl:w-20 md:w-14"} legenda={item.toUpperCase()} id={'habilidades'} name={item} handle={handleInputChange} value={personagem.habilidades[`${item}`]} />
            <InputFormText tamanho={"2xl:w-10 md:w-9"} value={modificadores[`${item}Mod`]} color={"bg-tormenta"} readonly />
            <InputFormText tamanho={"2xl:w-10 md:w-9"} id={`habilidades`} name={`${item}Bon`} handle={handleInputChange} color={"bg-tormenta"} value={personagem.habilidades[`${item}Bon`]} />
            <InputFormText tamanho={"2xl:w-10 md:w-9"} id={`habilidades`} name={`${item}Pen`} handle={handleInputChange} color={"bg-tormenta"} value={personagem.habilidades[`${item}Pen`]} />
          </div>)}
      </section>
      <section className=" flex col-span-16 gap-3 flex-col">
        <section className="glass flex gap-3 flex-wrap justify-center items-end pb-5">
          <InputFormText legenda="Pontos de Vida" tamanho={"w-30"} />
          <fieldset>
            <legend className="text-slate-100 relative top-2 text-sm ml-3">historico de Dano</legend>
            <div className="bg-black 2xl:h-9 md:h-7 w-48 rounded flex items-center justify-around gap-1 overflow-auto scroll-bar px-4">
              {historico.map((item, index) =>
                <div key={index}>
                  <div className={`${item.color} font-bold`.toString()}>{item.value}</div>
                </div>)}
            </div>
          </fieldset>
          <div className="flex items-end relative">
            <InputFormText legenda="Cura" name="cura" cor="text-verde" grow handle={handleHistoricoChange} icon={"up"} />
            <InputFormButton icon={"up"} click={handleClick} classe="absolute -right-0 2xl:bottom-0 md:-bottom-1" />
          </div>
          <div className="flex items-end relative">
            <InputFormText legenda="Dano" name="dano" cor="text-vermelho" grow handle={handleHistoricoChange} />
            <InputFormButton icon={"down"} click={handleClick} classe="absolute -right-0 2xl:bottom-0 md:-bottom-1" />
          </div>
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
      <section className="glass col-span-4  gap-3 flex-wrap justify-center items-end pb-9">
      <InputFormText legenda='Fortitude' tamanho="w-28" value={modificadores.conMod} />
      <InputFormText legenda='Reflexo' tamanho="w-28" value={modificadores.conMod} />
      <InputFormText legenda='Vontade' tamanho="w-28" value={modificadores.conMod} />
        
      </section>
    </div>
  )
}
export default Ficha