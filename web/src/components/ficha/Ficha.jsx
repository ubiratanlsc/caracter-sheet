import React, { useContext, useEffect, useState } from "react";
import InputFormText from "../../form/InputFormText";
import InputFormButton from "../../form/InputFormButton";
import Database from "../../context/Database.jsx";
import Pericias from "../pericias/Pericias.jsx";
function Ficha() {
  // console.log(status[habilidadess]);
  const { personagem, setPersonagem } = useContext(Database)
  const [isChecked, setChecked] = useState({});
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

  // ====================================================================
  //                           --> nivel <--
  // ====================================================================
  let nv = personagem['basicos']['nivel'] ? personagem['basicos']['nivel'] : 0
  let meioNv = nv / 2
  meioNv = Math.floor(meioNv)
  //=====================================================================

  
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
  // ====================================================================
  //               --> funções de historico de dano <--
  // ====================================================================
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
  // ====================================================================
  //                   --> funções de pericias <--
  // ====================================================================
  const handleToggle = (event) => {
    const { id } = event.target;
    setChecked(isChecked => ({ ...isChecked, [id]: !isChecked[id] }))
  };
  const pericias = [{ nome: "Acrobacia", habilidade: "des", penalidade: true },
  { nome: "Adestrar Animais", habilidade: "car", penalidade: false },
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
  // ====================================================================

  return (
    <div className="grid grid-cols-24 gap-y-3 gap-x-3 h-max">
      <header className="col-span-full">
        <h1 className="text-white text-center text-6xl">Mathaius</h1>
      </header>
      <section className="glass col-span-full flex flex-wrap-reverse gap-y-3 gap-x-3 py-3 md:px-1 2xl:px-3">

        <InputFormText grow legenda="Raça" />
        <InputFormText grow legenda="Classe" />
        <InputFormText grow legenda="Tendencia" />
        <InputFormText grow legenda="Tamanho" />
        <InputFormText grow legenda="Sexo" />
        <InputFormText grow legenda="Idade" />
        <InputFormText grow legenda="Deslocamento" />
        <InputFormText grow legenda="Nivel" id="basicos" name="nivel" handle={handleInputChange} value={personagem.basicos['nivel']} />
        <InputFormText grow legenda="Nome" />
        <InputFormText grow legenda="Divindade" />
      </section>
      <section className="col-span-19 grid grid-cols-24 gap-3">
        <section className="glass col-span-5 pb-3 md:px-1 2xl:px-0 grid gap-3">
          <div className="flex gap-x-2 items-end w-full justify-center mt-2 rounded">
            <div className=" text-center text-white 2xl:text-sm md:text-mp ">Habilidade</div>
            <div className=" text-center text-white 2xl:text-sm md:text-mp ">MOD</div>
            <div className=" text-center text-white 2xl:text-sm md:text-mp ">BONUS</div>
            <div className=" text-center text-white 2xl:text-sm md:text-mp ">DANO</div>
          </div>
          {array.map((item) =>
            <div className="flex items-end md:gap-x-1 md:gap-y-2 justify-center " key={item}>
              <InputFormText tamanho={"2xl:w-20 md:w-14"} legenda={item.toUpperCase()} id={'habilidades'} name={item} handle={handleInputChange} value={personagem.habilidades[`${item}`]} />
              <InputFormText tamanho={"2xl:w-10 md:w-9"} value={modificadores[`${item}Mod`]} color={"bg-tormenta"} readonly />
              <InputFormText tamanho={"2xl:w-10 md:w-9"} id={`habilidades`} name={`${item}Bon`} handle={handleInputChange} color={"bg-tormenta"} value={personagem.habilidades[`${item}Bon`]} />
              <InputFormText tamanho={"2xl:w-10 md:w-9"} id={`habilidades`} name={`${item}Pen`} handle={handleInputChange} color={"bg-tormenta"} value={personagem.habilidades[`${item}Pen`]} />
            </div>)}
        </section>
        <section className=" flex col-span-19 gap-x-3 gap-y-3 flex-col">
          {/* prontos de vida */}
          <section className="glass flex gap-3 flex-wrap items-end py-3 md:px-1 2xl:px-3">
            <InputFormText legenda="Pontos de Vida" tamanho={"w-30"} />
            <fieldset className="grow relative">
              <legend className="text-slate-100 absolute -top-2.5 text-sm ml-3">historico de Dano</legend>
              <div className="bg-black 2xl:h-9 md:h-7 grow rounded flex items-center justify-around gap-1 overflow-auto scroll-bar px-4">
                {historico.map((item, index) =>
                  <div key={index}>
                    <div data-current={`${item.color}`} className={`data-[current=verde]:text-verde data-[current=vermelho]:text-vermelho font-bold`}>{item.value}</div>
                  </div>)}
              </div>
            </fieldset>
            <div className="flex items-end relative">
              <InputFormText legenda="Cura" name="cura" cor="verde" grow handle={handleHistoricoChange} icon={"up"} />
              <InputFormButton icon={"up"} click={handleClick} classe="absolute -right-0 2xl:bottom-0 md:-bottom-1" />
            </div>
            <div className="flex items-end relative">
              <InputFormText legenda="Dano" name="dano" cor="vermelho" grow handle={handleHistoricoChange} />
              <InputFormButton icon={"down"} click={handleClick} classe="absolute -right-0 2xl:bottom-0 md:-bottom-1" />
            </div>
            <InputFormButton icon={"apagar"} click={removeLastElement} />
            <InputFormButton icon={"lixo"} click={removeAllElement} />
          </section>
          {/*CA */}
          <section className="glass flex gap-3 justify-center items-end py-3 md:px-1 2xl:px-3">
            <fieldset className="relative">
              <legend className="text-slate-100 absolute -top-2.5 text-sm ml-3">CA</legend>
              <div className="bg-black text-white w-28 md:h-7 2xl:h-9 rounded flex items-center justify-around gap-1">
              </div>
            </fieldset>
            <InputFormText legenda='&#189; Nivel' grow />
            <InputFormText legenda='Habilidade' grow value={modificadores.des} readonly />
            <InputFormText legenda='Armadura' grow />
            <InputFormText legenda='Escudo' grow />
            <InputFormText legenda='Tamanho' grow />
            <InputFormText legenda='Outros' grow />
          </section>
          {/*Resistencias fortitude reflexo e vontade */}
          <section className="flex gap-3 ">
            <section className="glass flex flex-col justify-center items-center md:px-1 2xl:px-3 pb-3 gap-3">
              <div className="flex gap-x-9 pr-5 items-end w-full justify-end mt-2 rounded ">
                <div className=" text-center text-white 2xl:text-sm md:text-mp ">Habilidade</div>
                <div className=" text-center text-white 2xl:text-sm md:text-mp ">&#189; Nivel</div>
                <div className=" text-center text-white 2xl:text-sm md:text-mp ">Outros</div>
              </div>
              <div className="flex items-end md:gap-x-1 2xl:gap-x-3">
                <InputFormText legenda='Fortitude' tamanho="w-20" value={modificadores.conMod} handle={handleInputChange} />
                <InputFormText legenda='' tamanho="w-20" value={modificadores['desMod']} readonly />
                <InputFormText legenda='' tamanho="w-20" />
                <InputFormText legenda='' tamanho="w-20" />
              </div>
              <div className="flex items-end md:gap-x-1 2xl:gap-x-3">
                <InputFormText legenda='Reflexo' tamanho="w-20" value={modificadores.conMod} handle={handleInputChange} />
                <InputFormText legenda='' tamanho="w-20" value={modificadores['desMod']} readonly />
                <InputFormText legenda='' tamanho="w-20" />
                <InputFormText legenda='' tamanho="w-20" />
              </div>
              <div className="flex items-end md:gap-x-1 2xl:gap-x-3">
                <InputFormText legenda='Vontade' tamanho="w-20" value={modificadores.conMod} handle={handleInputChange} />
                <InputFormText legenda='' tamanho="w-20" value={modificadores['desMod']} readonly />
                <InputFormText legenda='' tamanho="w-20" />
                <InputFormText legenda='' tamanho="w-20" />
              </div>
            </section>
            <section className="glass md:px-1 2xl:px-3">
              <InputFormText legenda='Magic Resist' tamanho="w-28" />
            </section>
            <section className="glass md:px-1 2xl:px-3">
              <InputFormText legenda='Redução de Dano' tamanho="w-30" />
              <InputFormText legenda='Resistencia Elemental' tamanho="w-30" />
              <InputFormText legenda='Magic Resist' tamanho="w-28" />
            </section>
          </section>

        </section>

        <section className="glass col-span-12 md:px-1 2xl:px-3 md:py-1 2xl:py-3 flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="bg-tormenta rounded w-56 text-center align-middle text-slate-200 flex justify-center items-center">Corpo a Corpo</div>
            <InputFormText legenda="total" grow value={5} readonly />
            <InputFormText legenda="BBA" grow value={5} readonly />
            <InputFormText legenda="Modificador" grow value={5} readonly />
            <InputFormText legenda="Tamanho" grow value={5} readonly />
            <InputFormText legenda="Outros" grow value={5} readonly />
          </div>
          <div className="flex gap-2">
            <div className="bg-tormenta rounded w-56 text-nowrap text-slate-200 flex justify-center items-center">Distancia</div>
            <InputFormText legenda="" grow value={5} readonly />
            <InputFormText legenda="" grow value={5} readonly />
            <InputFormText legenda="" grow value={5} readonly />
            <InputFormText legenda="" grow value={5} readonly />
            <InputFormText legenda="" grow value={5} readonly />
          </div>
        </section>
        <section className="glass col-span-12">
          <InputFormText legenda="habilidade" grow />
          <InputFormText legenda="" grow value={5} readonly />
          <InputFormText legenda="" grow value={5} readonly />
        </section>
        <section className="glass col-span-12 py-2 px-3 flex flex-col gap-2">
          <div className="text-nowrap text-slate-200 flex justify-between items-center gap-2 text-center">
            <span className="w-80">Armas / Ataques / Manobras</span>
            <span className="w-20">Bonus</span>
            <span className="w-20">Dano</span>
            <span className="w-20">Critico</span>
            <span className="w-20">Dist</span>
            <span className="w-20">Kg</span>
          </div>
          <div className="flex gap-2">
            <InputFormText tamanho={"w-80"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
          </div>
          <div className="flex gap-2">
            <InputFormText tamanho={"w-80"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
          </div>
          <div className="flex gap-2">
            <InputFormText tamanho={"w-80"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
          </div>
          <div className="flex gap-2">
            <InputFormText tamanho={"w-80"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
          </div>

        </section>
        <section className="glass col-span-12 py-2 px-3 flex flex-col gap-2">
          <div className="text-nowrap text-slate-200 flex justify-between items-center gap-2 text-center">
            <span className="w-80">Armadura / Escudo / Itens</span>
            <span className="w-20">Bonus</span>
            <span className="w-20">Max.Des</span>
            <span className="w-20">Penalidade</span>
            <span className="w-20">Kg</span>
          </div>
          <div className="flex gap-2">
            <InputFormText tamanho={"w-80"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
          </div>
          <div className="flex gap-2">
            <InputFormText tamanho={"w-80"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
          </div>
          <div className="flex gap-2">
            <InputFormText tamanho={"w-80"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
          </div>
          <div className="flex gap-2">
            <InputFormText tamanho={"w-80"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
            <InputFormText tamanho={"w-20"} />
          </div>
        </section>
      </section>

      <section className="glass col-span-5 flex flex-col gap-y-2 px-3">
        <div className="flex gap-x-1 items-end w-full justify-end mt-2 rounded">
          <div className=" text-center text-white 2xl:text-sm md:text-mp w-40 bg-tormenta rounded">Pericia</div>
          <div className=" text-center text-white 2xl:text-sm md:text-mp w-14  bg-tormenta rounded">Grad</div>
          <div className=" text-center text-white 2xl:text-sm md:text-mp w-12  bg-tormenta rounded">Hab</div>
          <div className=" text-center text-white 2xl:text-sm md:text-mp w-12  bg-tormenta rounded">Outros</div>
        </div>
        {pericias.map((item, index) =>
          <Pericias key={index} check={isChecked[item['nome']]} Toggle={handleToggle} id={item['nome']} name={item['nome']} />
        )}
      </section>
    </div>
  )
}
export default Ficha