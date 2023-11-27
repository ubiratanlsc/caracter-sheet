import React from "react";
import InputFormText from "../../form/InputFormText";

function Ficha() {
  return(
    <div className="flex flex-col gap-3">
      <header className="">
        <h1 className="text-white">Mathaius</h1>
      </header>
      <section className="glass flex flex-wrap gap-3 pl-4 pb-4">
        <InputFormText legenda="Raça" tamanho={"w-72"}/>
        <InputFormText legenda="Classe" tamanho={"w-72"}/>
        <InputFormText legenda="Nome" tamanho={"w-72"}/>
        <InputFormText legenda="Tendencia" tamanho={"w-72"}/>
        <InputFormText legenda="Tamanho" tamanho={"w-72"}/>
        <InputFormText legenda="Sexo" tamanho={"w-72"}/>
        <InputFormText legenda="Idade" tamanho={"w-72"}/>
        <InputFormText legenda="Divindade" tamanho={"w-72"}/>
        <InputFormText legenda="Deslocamento" tamanho={"w-72"}/>
        <InputFormText legenda="Nivel" tamanho={"w-72"}/>
      </section>
      <section className="glass flex gap-3 p-5">
        <InputFormText legenda="Pontos de Vida"/>
        <InputFormText legenda="Pontos de Mana"/>
        <InputFormText legenda="Pontos de Energia"/>
        <InputFormText legenda="Redução de Dano"/>
      </section>
    </div>
  )
} 
export default Ficha