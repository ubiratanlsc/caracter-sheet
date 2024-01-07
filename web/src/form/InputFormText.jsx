import { useEffect, useMemo, useState } from 'react'
import './inputnumber.css'
export default function InputFormText(props) {

  const ocultar = props.ocultar ? props.ocultar : ''
  const tamanho = props.tamanho ? props.tamanho : "w-full"
  const color = props.color ? props.color : "bg-black"
  return (
    <>
      <fieldset className='grow'>
        <legend className='text-slate-100 relative top-2  text-sm ml-3'>{props.legenda}</legend>
        {/* <legend style={{ marginTop: '0.4em', marginLeft: '1.3em', position: 'absolute', visibility: `${ocultar}` }}>CD</legend> */}
        <input
          placeholder={props.placeholder}
          cor={props.cor}
          className={`${tamanho} text-center text-white ${color} focus:border-none focus:outline target:border-none rounded h-9`}
          type={props.type}
          name={props.name}
          id={props.id}
          onChange={props.handle}
          value={props.value}
          defaultValue={props.defaultValue}
          readOnly={props.readonly}
        />
      </fieldset>
    </>
  )
}