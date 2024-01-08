import { useEffect, useMemo, useState } from 'react'
import { GiHealthIncrease } from 'react-icons/gi';
import InputFormButton from './InputFormButton';
// import './inputnumber.css'
export default function InputFormText(props) {

  let ocultar = props.ocultar ? props.ocultar : ''
  let tamanho = props.tamanho ? props.tamanho : "w-full"
  let color = props.color ? props.color : "bg-black"
  let grow = props.grow ? "grow" : "";
  let icon = props.icon ? props.icon : "";
  if (grow == "grow") {
    tamanho = "";
  }
  return (
    <>
      <fieldset className={`${tamanho} ${grow}`}>
        <legend className=' text-slate-100 relative top-2 2xl:text-sm md:text-xs ml-3'>{props.legenda}</legend>
        {/* <legend style={{ marginTop: '0.4em', marginLeft: '1.3em', position: 'absolute', visibility: `${ocultar}` }}>CD</legend> */}
        <div className="flex">
          <input
            placeholder={props.placeholder}
            cor={props.cor}
            className={`w-full text-center text-white ${color} focus:border-none focus:outline target:border-none rounded 2xl:h-9 md:h-7 2xl:text-base md:text-xs`}
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