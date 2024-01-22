import { useEffect, useMemo, useState } from 'react'
import { GiHealthIncrease } from 'react-icons/gi';
import InputFormButton from './InputFormButton';
// import './inputnumber.css'
export default function InputFormText(props) {

  let ocultar = props.ocultar ? props.ocultar : ''
  let tamanho = props.tamanho ? props.tamanho : "w-full"
  let color = props.color ? props.color : "bg-black"
  let bg = props.bg ? props.bg : ""
  let grow = props.grow ? "grow" : "";
  let tamanhoInput = props.tamanhoInput ? props.tamanhoInput : "2xl:h-9 md:h-7";
  if (grow == "grow") {
    tamanho = "";
  }
  return (
    <>
      <fieldset className={`${tamanho} ${grow} ${bg} relative`}>
        <legend className='absolute text-slate-100 2xl:text-sm md:text-xs ml-3 -top-2.5'>{props.legenda}</legend>
        {/* <legend style={{ marginTop: '0.4em', marginLeft: '1.3em', position: 'absolute', visibility: `${ocultar}` }}>CD</legend> */}
        <div className="flex">
          <input
            placeholder={props.placeholder}
            cor={props.cor}
            className={`w-full text-center text-white ${color} focus:border-none focus:outline target:border-none rounded ${tamanhoInput} 2xl:text-base md:text-xs`}
            type={props.type}
            name={props.name}
            id={props.id}
            onChange={props.handle}
            value={props.value}
            defaultValue={props.defaultValue}
            readOnly={props.readonly}
          />
        </div>
      </fieldset>
    </>
  )
}