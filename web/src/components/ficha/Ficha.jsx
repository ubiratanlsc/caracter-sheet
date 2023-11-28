import React, { useEffect, useState } from "react";
import InputFormText from "../../form/InputFormText";

function Ficha() {
  const [habilidades, setHabilidades] = useState({for: 10, des: 10, con: 10, int: 10, sab: 10, car: 10});
  const [modificador, setModificador] = useState({bonus: 0, penalidade: 0})
  const array = ["for", "des", "con", "int", "sab", "car"]
  function alteraModificador(valor, bonus, penalidade) {
    let resultado = parseInt(valor) - 10;
    resultado /= 2;
    resultado = Math.floor(resultado);
    return resultado;
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHabilidades(habilidades => ({ ...habilidades, [name]: value }))
  };
  const handleModificadorChange = (event) => {
    const { name, value } = event.target;
    setModificador(modificador => ({ ...modificador, [name]: value }))
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
          <div className="flex gap-1 items-end">
            <InputFormText legenda={item.toUpperCase()} id={item} name={item} tamanho={"w-20"} handle={handleInputChange} value={habilidades[`${item}`]}/>
            <InputFormText tamanho={"w-10"} value={alteraModificador(habilidades[`${item}`])} color={"bg-tormenta"}/>
            <InputFormText tamanho={"w-10"} handle={handleInputChange} color={"bg-tormenta"} />
            <InputFormText tamanho={"w-10"} handle={handleInputChange} color={"bg-tormenta"} />
          </div>)}
      </section>
    </div>
  )
}
export default Ficha