import React, { useContext, useEffect, useState } from "react";
import InputFormText from "../../form/InputFormText";
import InputFormButton from "../../form/InputFormButton";
import Database from "../../context/Database.jsx";
import Pericias from "../pericias/Pericias.jsx";
import { useInt } from '../../functions/newfunction.js';
import { useModificador } from "../../functions/modificador.js";
import { useDefesas } from "../../functions/defesas.js";
import { usePericias } from "../../functions/pericias.js";
function Ficha() {
  // console.log(status[habilidadess]);
  const { personagem, setPersonagem } = useContext(Database)
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
  const arrayItens = [1, 2, 3, 4]

  // ====================================================================

  const { InputChangeInt, meioNv } = useInt()
  const { modificadores } = useModificador()
  const { classe_armadura, somaArmaduras, tamanho, outros, fortitude, reflexos, vontade } = useDefesas()

  // ====================================================================
  //                           --> nivel <--
  // ====================================================================
  // let nv = personagem['basicos']['nivel'] ? personagem['basicos']['nivel'] : 0
  // let meioNv = nv / 2
  // meioNv = Math.floor(meioNv)
  //=====================================================================



  // atualizarResultado()
  const handleInputChange = (event) => {
    const { name, value, id } = event.target;
    let valor = value ? value : 0;
    setPersonagem(personagem => ({ ...personagem, [id]: { ...personagem[id], [name]: parseInt(valor) } }))
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

  const { handleToggle, isChecked, setChecked, pericias, treino } = usePericias()
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
        <InputFormText grow legenda="Nivel" id="basicos" name="nivel" handle={InputChangeInt} value={personagem.basicos['nivel']} />
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
                {classe_armadura}
              </div>
            </fieldset>
            <InputFormText legenda='&#189; Nivel' grow value={meioNv} readonly />
            <InputFormText legenda='Habilidade' grow value={modificadores['desMod']} readonly />
            <InputFormText legenda='Armadura' grow value={somaArmaduras} readonly />
            <InputFormText legenda='Tamanho' grow value={tamanho} handle={InputChangeInt} id={"defesas"} name="tamanho" />
            <InputFormText legenda='Outros' grow value={outros} readonly />
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
                <InputFormText legenda='Fortitude' tamanho="w-20" value={fortitude} readonly />
                <InputFormText legenda='' tamanho="w-20" value={modificadores['conMod']} readonly />
                <InputFormText legenda='' tamanho="w-20" value={meioNv} readonly />
                <InputFormText legenda='' tamanho="w-20" id="defesas" name="fortOutros" value={personagem.defesas['fortOutros']} handle={InputChangeInt} />
              </div>
              <div className="flex items-end md:gap-x-1 2xl:gap-x-3">
                <InputFormText legenda='Reflexo' tamanho="w-20" value={reflexos} readonly />
                <InputFormText legenda='' tamanho="w-20" value={modificadores['desMod']} readonly />
                <InputFormText legenda='' tamanho="w-20" value={meioNv} readonly />
                <InputFormText legenda='' tamanho="w-20" id="defesas" name="reflOutros" value={personagem.defesas['reflOutros']} handle={handleInputChange} />
              </div>
              <div className="flex items-end md:gap-x-1 2xl:gap-x-3">
                <InputFormText legenda='Vontade' tamanho="w-20" value={vontade} readonly />
                <InputFormText legenda='' tamanho="w-20" value={modificadores['sabMod']} readonly />
                <InputFormText legenda='' tamanho="w-20" value={meioNv} readonly />
                <InputFormText legenda='' tamanho="w-20" id="defesas" name="vontOutros" value={personagem['defesas']['vontOutros']} handle={handleInputChange} />
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
        <div className="text-nowrap text-slate-200 flex justify-between items-center gap-2 text-center ">
            <div className="w-[140px] px-5 bg-tormenta rounded">Tipo</div>
            <span className="w-20 grow bg-tormenta rounded">Total</span>
            <span className="w-20 grow bg-tormenta rounded">Dano</span>
            <span className="w-20 grow bg-tormenta rounded">Critico</span>
            <span className="w-20 grow bg-tormenta rounded">Dist</span>
            <span className="w-20 grow bg-tormenta rounded">Kg</span>
          </div>
          <div className="flex gap-2">
            <div className="bg-tormenta rounded w-56 text-center align-middle text-slate-200 flex justify-center items-center">Corpo a Corpo</div>
            <InputFormText legenda="" grow value={5} readonly />
            <InputFormText legenda="" grow value={5} readonly />
            <InputFormText legenda="" grow value={5} readonly />
            <InputFormText legenda="" grow value={5} readonly />
            <InputFormText legenda="" grow value={5} readonly />
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
          <div className="text-nowrap text-slate-200 flex justify-between items-center gap-2 text-center ">
            <span className="w-80 bg-tormenta rounded">Armas / Ataques / Manobras</span>
            <span className="w-20 bg-tormenta rounded">Bonus</span>
            <span className="w-20 bg-tormenta rounded">Dano</span>
            <span className="w-20 bg-tormenta rounded">Critico</span>
            <span className="w-20 bg-tormenta rounded">Dist</span>
            <span className="w-20 bg-tormenta rounded">Kg</span>
          </div>
          {arrayItens.map((item, index) =>
            <div key={index} className="flex gap-2">
              <InputFormText tamanho={"w-80"} />
              <InputFormText tamanho={"w-20"} />
              <InputFormText tamanho={"w-20"} />
              <InputFormText tamanho={"w-20"} />
              <InputFormText tamanho={"w-20"} />
              <InputFormText tamanho={"w-20"} />
            </div>
          )}
        </section>
        <section className="glass col-span-12 py-2 px-3 flex flex-col gap-2">
          <div className="text-nowrap text-slate-200 flex justify-between items-center gap-2 text-center">
            <span className="w-80 bg-tormenta rounded">Armadura / Escudo / Itens</span>
            <span className="w-20 bg-tormenta rounded">Bonus</span>
            <span className="w-20 bg-tormenta rounded">Max.Des</span>
            <span className="w-20 bg-tormenta rounded">Penalidade</span>
            <span className="w-20 bg-tormenta rounded">Kg</span>
          </div>
          {arrayItens.map((item, index) =>
            <div key={index} className="flex gap-2 justify-between">
              <InputFormText tamanho={"w-80"} />
              <InputFormText tamanho={"w-20"} id={'defesas'} name={`armadura${item}`} handle={InputChangeInt} value={personagem.defesas[`armadura${item}`]} />
              <InputFormText tamanho={"w-20"} />
              <InputFormText tamanho={"w-20"} />
              <InputFormText tamanho={"w-20"} />
            </div>
          )}
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
          <Pericias key={index} check={isChecked[item['nome']]} Toggle={handleToggle} id={item['nome']} name={item['nome']} graduacao={treino(item['nome'], item['habilidade'])} mod={modificadores[`${item}Mod`]}/>
        )}
      </section>
    </div>
  )
}
export default Ficha