import React, { useEffect, useState } from "react";
import InputFormText from "../../form/InputFormText";
import InputFormButton from "../../form/InputFormButton";

function Ficha() {
  const [habilidades, setHabilidades] = useState({
    for: 10, forPen: 0, forBon: 0,
    des: 10, desPen: 0, desBon: 0,
    con: 10, conPen: 0, conBon: 0,
    int: 10, intPen: 0, intBon: 0,
    sab: 10, sabPen: 0, sabBon: 0,
    car: 10, carPen: 0, carBon: 0.
  });
  const array = ["for", "des", "con", "int", "sab", "car"]
  const arrayDano = ['10', 20, 30, 40,]
  const arrayCura = [50, 60, 70, 80,]
  function alteraModificador(valor, id) {
    let penalidade = parseInt(habilidades[`${id}Pen`]) ? parseInt(habilidades[`${id}Pen`]) : 0;
    let bonificado = parseInt(habilidades[`${id}Bon`]) ? parseInt(habilidades[`${id}Bon`]) : 0;
    let value = parseInt(valor)
    let soma = value + bonificado;
    let sub = soma - penalidade;
    let resultado = sub - 10;
    resultado /= 2;
    resultado = Math.floor(resultado);
    return resultado;
  }
  const atualizarResultado = () => {
    const novoResultado = campoA + campoB - campoC;
    setResultado(novoResultado);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHabilidades(habilidades => ({ ...habilidades, [name]: value }))
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
        <InputFormText legenda="Nivel" tamanho={"w-72"} />
      </section>
      <section className="glass col-span-2  justify-center flex flex-wrap p-2">
        <div className="flex gap-1 items-end absolute top-1">
          <div className=" text-center text-white text-xs w-20 rounded">Habilidade</div>
          <div className=" text-center text-white text-xs w-10 rounded">MOD</div>
          <div className=" text-center text-white text-xs w-10 rounded">BONUS</div>
          <div className=" text-center text-white text-xs w-10 rounded">DANO</div>
        </div>
        {array.map((item) =>
          <div className="flex gap-1 items-end" key={item}>
            <InputFormText legenda={item.toUpperCase()} id={item} name={item} tamanho={"w-20"} handle={handleInputChange} value={habilidades[`${item}`]} />
            <InputFormText tamanho={"w-10"} value={alteraModificador(habilidades[`${item}`], item)} color={"bg-tormenta"} readonly />
            <InputFormText tamanho={"w-10"} id={`${item}Bon`} name={`${item}Bon`} handle={handleInputChange} color={"bg-tormenta"} value={habilidades[`${item}Bon`]} />
            <InputFormText tamanho={"w-10"} id={`${item}Pen`} name={`${item}Pen`} handle={handleInputChange} color={"bg-tormenta"} value={habilidades[`${item}Pen`]} />
          </div>)}
      </section>
      <section className="life glass flex col-span-4 gap-3 flex-wrap items-start">
        <InputFormText legenda="Pontos de Vida" tamanho={"w-30"} />
        <InputFormText legenda="Historico de Dano" tamanho={"w-50"} value={arrayDano} />
        <div className="flex glass gap-3 items-top">
          <InputFormText legenda="Cura" tamanho={"w-20"} />
          <InputFormButton icon={"up"} />
          <InputFormText legenda="Dano" tamanho={"w-20"} />
          <InputFormButton icon={"down"} />
        </div>



      </section>
    </div>
  )
}
export default Ficha